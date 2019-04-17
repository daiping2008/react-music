import React, {Component} from 'react'

import {connect} from 'react-redux'

import {actionCreator} from '../../store/artists'

import Letters from '../../components/artists/letters'
import Item from '../../components/artists/item'
import Head from '../../components/head'
import Tab from '../../components/tab'
import Loading from '../../components/loading'

import './index.scss'

class Artists extends Component{
  constructor(props){
    super(props)
    this.state = {
      listHeight: [],
      letterIdx:0
    }
  }
  
  render(){
    const {artists, letters} = this.props
    const {letterIdx} = this.state
    return (
      <div className="container art-container">
        <Head/>
        <Tab/>
        {
          letters.length > 0 ?
          <Letters letterIdx={letterIdx} getLetterIndex={this.getLetterIndex.bind(this)} data={letters} /> : ''
        }
        {
          artists.length > 0 ?
          this.renderArtists() : <Loading/>
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getArtists()

    setTimeout(() => {
      this._calculateListHeight()
    }, 200);
    
    window.addEventListener('scroll', () => {this._onScroll()}, true)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', function () {})
  }

  getLetterIndex(index) {
    this._scrollTo(index)
  }

  renderArtists() {
    const {artists} = this.props
    return artists.map((item, index) => {
      return (
        <div ref={`listGroup${index}`} key={index}>
          <h1 className="title">{item.title}</h1>
          {
            item.items.map((ele, idx) => <Item data={ele} key={idx} />)
          }
        </div>
      )
    })
  }
  
  _onScroll() {
    const scrollTop = document.documentElement.scrollTop
    const {listHeight} =  this.state
    for (let i = 0; i < listHeight.length - 1; i++) {
      const height = listHeight[i]
      const height2 = listHeight[i+1]

      if (scrollTop >= height && scrollTop < height2) {
        this._changeLettersIdx(i)
      }
    }
  }

  _scrollTo(index) {
    const {listHeight} = this.state
    if (index < 0 && index >= listHeight.length ) return

    window.scrollTo({
      top: listHeight[index],
      bahavior: 'smooth'
    })

    this._changeLettersIdx(index)
  }

  _changeLettersIdx(index) {
    this.setState({
      letterIdx: index
    })
  }

  _calculateListHeight(){
    const {letters} = this.props
    const listHeight = []
    let height = 0
    listHeight.push(height)
    for (let i = 0;i < letters.length; i++) {
      const ref = this.refs[`listGroup${i}`]
      if (!ref) return 
      height += ref.clientHeight
      listHeight.push(height)
    }
    return new Promise(resolve => {
      this.setState({
        listHeight
      }, resolve)
    })
  }
} 

const mapStateToProps = state => {
  return {
    artists: state.get('artists').get('artists').toJS(),
    letters: state.get('artists').get('letters').toJS()
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