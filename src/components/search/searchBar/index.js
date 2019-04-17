import React, {Component} from 'react'

import './index.scss'

class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      q1: ''
    }
  }

  render() {
    const {q1} = this.state
    return (
      <div className='searchbar-container'>
        <i className='iconfont'>&#xe60a;</i>
        <input onKeyUp={this.bindKeyPress.bind(this)} onChange={this.bindChange.bind(this)} value={q1} className='input' placeholder='搜索歌曲,歌手' />
        <i onClick={this.bindClear.bind(this)} className='iconfont'>&#xe6b2;</i>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    this.setState({
      q1: nextProps.q
    })
  }

  bindClear() {
    this.props.clear()
  }
  
  bindKeyPress(e) {
    e.keyCode === 13 && this.props.bindKeyPress(this.state.q1)
  }

  bindChange(e) {
    this.setState({
      q1: e.target.value
    })
  }
}

export default SearchBar