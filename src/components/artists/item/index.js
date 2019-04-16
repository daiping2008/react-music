import React, {Component} from 'react'

import './index.scss'

class Item extends Component{
  render() {
    const {data} = this.props
    return (
      <div className="artists-continer">
        <img className="artists-img" src={data.picUrl} alt="" />
        <div className="artists-name">{data.name}</div>
      </div>
    )
  }
}

export default Item