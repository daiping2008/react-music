import React, {Component} from 'react'

import {connect} from 'react-redux'

import {actionCreator} from '../../store/recommend'

import RecommendModel from '../../models/recommend'

const recommendModel = new RecommendModel()

class Recommend extends Component {
  constructor(){
    super()
    this.state = {
      inputValue : ''
    }
  }
  render() {
    return <div>1232{this.props.username} <i className="iconfont">&#xe6cf;</i>
        <input value={this.state.inputValue} onChange={this.bindChangeInput.bind(this)}  /><button onClick={this.bindClick.bind(this)}>提交</button>
      </div>
  }
  componentDidMount() {
    recommendModel.getBanner()
  }
  bindChangeInput(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  bindClick() {
    this.props.setUsername(this.state.inputValue)
  }
}

const mapStateToProps = state => {
  return {
    username: state.get('recommend').get('username')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername(username) {
      console.log(username)
      dispatch(actionCreator.setUsername(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)