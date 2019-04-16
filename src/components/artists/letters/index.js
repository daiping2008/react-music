import React, {Component} from 'react'

import './index.scss'

class Letters extends Component{
  render(){
    const {data, letterIdx} = this.props
    return (
      <div className="letters-container">
        {
          data.map((item, index) => <div className={letterIdx===index? 'active':''} onClick={this.bindClick.bind(this, index)} key={index}>{item.slice(0, 1)}</div>)
        }
      </div>
    )
  }

  bindClick(index) {
    this.props.getLetterIndex(index)
  }
}

export default Letters