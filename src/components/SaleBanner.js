import React from 'react'
import img from "../assest/parallax-bg.png.webp"
const SaleBanner = () => {
  return (
    <>
    <section className='sale-banner mt-5'>
        <img src={img} alt=""  />
        <div className="sale-banner-detail">
            <h1>Up To 50% Off</h1>
            <h5>Winter Sale</h5>
            <p>Him she'd let them sixth saw light</p>
            <button>Shop Now</button>
        </div>
    </section>
    </>
  )
}

export default SaleBanner