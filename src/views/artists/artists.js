import React, {Component} from 'react'

import {connect} from 'react-redux'

import {actionCreator} from '../../store/artists'

import Item from '../../components/artists/item'
import Head from '../../components/head'
import Tab from '../../components/tab'

import './index.scss'

class Artists extends Component{
  render(){
    const {artists} = this.props
    return (
      <div className="container">
        <Head/>
        <Tab/>
        {
          artists.length > 0 ?
          this.renderArtists() : ''
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getArtists()
  }

  renderArtists() {
    const {artists} = this.props
    return artists.map((item, index) => {
      return <Item data={item} key={index} />
    })
  }
} 

const mapStateToProps = state => {
  return {
    artists: state.get('artists').get('artists').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArtists() {
      dispatch(actionCreator.getArtists())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists)