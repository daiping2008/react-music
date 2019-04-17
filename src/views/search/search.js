import React, {Component} from 'react'

import {connect} from 'react-redux'

import {actionCreator} from '../../store/search'

import Head from '../../components/head'
import Tab from '../../components/tab'
import SearchBar from '../../components/search/searchBar'


import './index.scss'

class Search extends Component {
  render() {
    const {showRes, q} = this.props
    return (
      <div className='container search-container'>
        <Head/>
        <Tab/>
        <SearchBar q={q}  clear={this.clear.bind(this)} bindKeyPress={this.bindKeyPress.bind(this)}/>
        <p className='title'>热门搜索</p>
        {
          showRes > 0 ?
          this.renderSearchRes() : this.renderKeys() 
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getSearchHot()
  }

  renderSearchRes() {
    const {artists, songs} = this.props
    return (
      <div className='search-res'>
        {
          artists.length > 0 ? 
          this.renderArtists() : ''
        }
        <p className='title'>单曲</p>
        {
          songs.length > 0 ? 
          this.renderSongs() : ''
        }
      </div>
    )
  }

  renderSongs() {
    const {songs} = this.props
    const res = songs.map((ele, idx) => {
      return (
        <div key={idx} className='songs'>
          <div className='song-left'>
            <div className='name'>{ele.name}</div>
            <div className='sub-name'>{ele.artists[0].name}</div>
          </div>
          <i className='iconfont'>&#xe62a;</i>
        </div>
      )
    })

    return (
      <div className='songs-container'>
        {res}
      </div>
    )
  }

  clear() {
    this.props.clear()
  }

  renderArtists() {
    const {artists} = this.props
    const res = artists.map((ele, idx) => {
      return (
        <div key={idx} className='artists'>
          <img className='avator' src={ele.picUrl} alt='' />
          <div className='cont'>
            <div>歌手：<span className='name'>{ele.name}</span></div>
          </div>
        </div>
      )
    })

    return (
      <div className='artists-container'>
        {res}
      </div>
    )
  }

  bindKeyPress(q) {
    this.props.getSearchSuggest(q)
  }

  bindClick(q) {
    this.props.getSearchSuggest(q)
  }

  renderKeys() {
    const {hots, his} = this.props
    return (
      <div>
        <div className='tag-container'>
          {
            hots.length > 0 ? 
            this.renderHots() : ''
          }
        </div>
        <p className='title'>历史搜索<i onClick={this.clearHis.bind(this)} className='iconfont clear'>&#xe626;</i></p>
        <div className='his-container'>
          {
            his.length > 0 ?
            this.renderHis() : ''
          }
        </div>
      </div>
    )
  }

  clearHis() {
    this.props.clearHis()
  }

  delHis(idx, e) {
    e.stopPropagation();
    e.preventDefault()
    this.props.delHis(idx)
  }

  renderHis() {
    const {his} = this.props
    return his.map((ele, idx) => <div onClick={this.bindClick.bind(this, ele)} className='his-item' key={idx} >
        {ele}
        <i onClick={this.delHis.bind(this, idx)} className='iconfont del'>&#xe61b;</i>
      </div>)
  }

  renderHots() {
    const {hots} = this.props
    return hots.map((ele, idx) => <div onClick={this.bindClick.bind(this, ele.first)} className='tag' key={idx}>{ele.first}</div>)
  }
}

const mapStateToProps = state => {
  return {
    hots: state.get('search').get('hots').toJS(),
    his: state.get('search').get('his').toJS(),
    artists: state.get('search').get('artists').toJS(),
    songs: state.get('search').get('songs').toJS(),
    showRes: state.get('search').get('showRes'),
    q: state.get('search').get('q')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchHot() {
      dispatch(actionCreator.getSearchHot())
    },
    getSearchSuggest(q) {
      dispatch(actionCreator.getSearchSuggest(q))
    },
    clear() {
      dispatch(actionCreator.clear())
    },
    delHis(idx) {
      dispatch(actionCreator.delHis(idx))
    },
    clearHis() {
      dispatch(actionCreator.clearHis())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)