import React, {Component} from 'react'

import {connect} from 'react-redux'
import {actionCreator} from '../../store/rank'

import Loading from '../../components/loading'
import Item from '../../components/rank/item'
import Head from '../../components/head'
import Tab from '../../components/tab'

import './index.scss'

class Rank extends Component {
  render() {
    const {rankList} = this.props
    console.log(rankList)
    return (
      <div className='container'>
        <Head/>
        <Tab/>
        {
          rankList.length > 0 ? 
          this.renderRank() : <Loading/>
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getTop()
  }

  renderRank() {
    const {rankList} = this.props
    return rankList.map((ele, index) => {
        return <Item data={ele} key={index} />
      })
  }
}

const mapStateToProps = state => {
  return {
    rankList: state.get('rank').get('rankList').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTop() {
      dispatch(actionCreator.getTop())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)