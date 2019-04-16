import React, {Component} from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './index.scss'

class Swiper extends Component{
  render() {
    return (
      <div>{this.renderSlider()}</div>
    )
  }
  renderSlider() {
    const {banners} = this.props
    if (banners.length === 0) {
      return ''
    }
    const slider = (
      <AwesomeSlider className="swiper-container">
        {
          banners.map((item, index)=>{
            return <div key={index}><img src={item.imageUrl}  alt="" /></div>
          })
        } 
      </AwesomeSlider>
    )
    return slider
  }
}

export default Swiper