import React, {Component} from 'react'

import './index.scss'

class Loading extends Component {
  render() {
    return (
      <div className="loader-inner line-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Loading