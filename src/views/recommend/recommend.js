import React, {Component} from 'react'

import {connect} from 'react-redux'

import {actionCreator} from '../../store/recommend'

import Head from '../../components/head'
import Tab from '../../components/tab'
import Swiper from '../../components/swiper'
import Item from '../../components/recommend/item'

import './index.scss'

class Recommend extends Component {
  constructor(){
    super()
    this.state = {
      inputValue : ''
    }
  }
  render() {
    const {banners, recommendList} = this.props
    return <div className="container">
        <Head/>
        <Tab/>
        <Swiper banners={banners}/>
        <h1 className="title">热门歌单推荐</h1>
        <div className="rec-content">
          {
            recommendList.length > 0 ? 
            this.renderRecommendList() : ''
          }
        </div>
      </div>
  }
  componentDidMount() {
    this.props.getBanners()
    this.props.getList()
  }
  renderRecommendList() {
    const {recommendList} = this.props
    return recommendList.map((item, index) => {
      return <Item data={item} key={index} />
    })
  }
}

const mapStateToProps = state => {
  return {
    banners: state.get('recommend').get('banners').toJS(),
    recommendList: state.get('recommend').get('recommendList').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBanners() {
      dispatch(actionCreator.getBanners())
    },
    getList() {
      dispatch(actionCreator.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)