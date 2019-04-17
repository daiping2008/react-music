import React, {Component} from 'react'

import './index.scss'

class Item extends Component {
  render() {
    const {data} = this.props
    return (
      <div className='rank-item'>
        <img className='img' src={data.coverImgUrl} alt='' />
        <div className='content'>
          {
            data.tracks.slice(0, 3).map((ele, idx) => {
              return <div className='item' key={idx}>{ele.name}</div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Item