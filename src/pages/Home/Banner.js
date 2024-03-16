import React from 'react'
import img1 from '../../assest/hero-banner.webp';
const Banner = () => {
  return (
   <div className="banner">
    <div className="banner-left-box">
        <div className="banner-img">
            <img src={img1} alt="" />
        </div>
    </div>
    <div className="banner-right-box">
        <div className='banner-details'>
        <h2 >Shop is fun</h2>
        <h1>BROWSE OUR PREMIUM PRODUCT</h1>
        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
        <button>Browse Now</button>
        </div>
    </div>
   </div>
  )
}

export default Banner