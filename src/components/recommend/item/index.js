import React, {Component} from 'react'

import './index.scss'
class Item extends Component{

  render() {
    const {data} = this.props
    return (
      <div className="recommend-container">
        <img src={data.picUrl} alt=""  />
        <div className="content">
          <div className="name">{data.name}</div>
          <div className="desc">{data.copywriter}</div>
        </div>
      </div>
    )
  }
}

export default Item