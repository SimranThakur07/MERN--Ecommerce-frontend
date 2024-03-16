import React from 'react'
import img2 from '../../assest/product5.webp'
import img3 from '../../assest/product6.webp'
import img4 from '../../assest/product7.webp'
import img5 from '../../assest/product8.webp'
import img6 from '../../assest/product9.webp'
import img7 from '../../assest/product10.webp'
import img8 from '../../assest/product11.webp'
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const CategoryProduct = () => {
  return (
    <>
     <div className="col-sm-6 col-md-3 mb-4">
     <div className="card-mg">
        <img src={img2} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Beauty</p>
          <h5>Women Facewash</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
         </div>
    <div className="col-sm-6 col-md-4 mb-4">
    <div className="card-mg">
        <img src={img3} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
          <p>Decor</p>
          <h5>Room Flash Light</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
    </div>
    <div className="col-sm-6 col-md-4 mb-4">
    <div className="card-mg">
        <img src={img4} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Decor</p>
          <h5>Room Flash Light</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
    </div>
    <div className="col-sm-6 col-md-4 mb-4">
    <div className="card-mg">
        <img src={img5} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Accessories</p>
          <h5>Man Office Bag</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
      </div>
      <div className="col-sm-6 col-md-4 mb-4">

      <div className="card-mg">
        <img src={img6} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Kids Toy</p>
          <h5>Charging Car</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
      </div>
      <div className="col-sm-6 col-md-4 mb-4">
      <div className="card-mg">
        <img src={img7} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Accessories</p>
          <h5>Blutooth Speaker</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
      </div>
      <div className="col-sm-6 col-md-4 mb-4">
      <div className="card-mg">
        <img src={img8} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Kids Toy</p>
          <h5>Blutooth Speaker</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>  
      </div>
      <div className="col-sm-6 col-md-4 mb-4">

<div className="card-mg">
  <img src={img6} alt=""  />
  <div className="card-mg-details">
  <span><FaExternalLinkAlt /></span>
    <span><IoCartOutline /></span>
    <span><FaRegHeart /></span>
  </div>
</div>
<div className="card-product-details">
<p>Kids Toy</p>
    <h5>Charging Car</h5>
    <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
</div>
</div>
<div className="col-sm-6 col-md-4 mb-4">
    <div className="card-mg">
        <img src={img4} alt=""  />
        <div className="card-mg-details">
        <span><FaExternalLinkAlt /></span>
          <span><IoCartOutline /></span>
          <span><FaRegHeart /></span>
        </div>
      </div>
      <div className="card-product-details">
      <p>Decor</p>
          <h5>Room Flash Light</h5>
          <span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span>
      </div>
    </div>
    </>
  )
}

export default CategoryProduct