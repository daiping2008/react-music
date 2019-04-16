import React, {Component} from 'react'

import './index.scss'

class Header extends Component{
  render() {
    return (
      <div className="header-container">
        Music
        <i className="iconfont user">&#xe655;</i>
      </div>
    )
  }
}

export default Header