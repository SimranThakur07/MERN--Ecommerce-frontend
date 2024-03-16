import React from 'react'
import '../styles/Footer.css'
import img1 from '../assest/r1.jpg.webp'
import img2 from '../assest/r2.jpg.webp'
import img3 from '../assest/r3.jpg.webp'
import img4 from '../assest/r5.jpg.webp'
import { BiSolidNavigation } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <footer>
    <div className="container text-center mt-4">
    <div className="row justify-content-evenly">
    <div className="col-lg-3 col-md-3 col-sm-12 mt-5 mt-lg-0  mt-md-0 ">
      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi quam ut, vero harum quibusdam enim dolorem molestiae non incidunt, eaque reprehenderit</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi molestiae cumque, cum aliquam modi.</p>
    </div>
    <div className="col-lg-6 col-sm-12 row flex-row ">
    <div className="col-lg-6 col-md-3 col-sm-12">
      <h6>Quick Links</h6>
      <ul className='ps-3'>
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Product</li>
        <li>Brand</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="col-lg-6 col-md-3 col-sm-12">
    <h6>Gallery</h6>
    <div className="container text-center">
  <div className="row">
    <div className="col-6 col-sm-4"><img src={img1} alt="" /></div>
    <div className="col-6 col-sm-4"><img src={img2} alt="" /></div>
    <div className="w-100 d-none d-md-block"></div>
    <div className="col-6 col-sm-4"><img src={img3} alt="" /></div>
    <div className="col-6 col-sm-4"><img src={img4} alt="" /></div>
    <div className="w-100 d-none d-md-block"></div>
    <div className="col-6 col-sm-4"><img src={img3} alt="" /></div>
    <div className="col-6 col-sm-4"><img src={img4} alt="" /></div>
  </div>
</div>
    </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 footer-contact">
    <h6>Contact Us</h6>
    <div className='mb-2'>
    <span><span className='footer-icon'><BiSolidNavigation /></span> Head Office</span>
    <p>123, Main Street, Your City</p>
    </div>
    <div className='mb-2'>
    <span><span className='footer-icon'><FaPhoneAlt /></span> Phone Number</span>
    <p>
    +123 456 7890
    </p>
    <p>+123 456 7890</p>
    </div>
    <div className='mb-2'>
      <span><span className='footer-icon'><MdEmail /></span> Email</span>
      <p>free@infoexample.com</p>
      <p>www.infoexample.com</p>
    </div>
    </div>
    </div>
    </div>
    </footer>
    <div className="footer-bottom">
    Copyright ©2023 All rights reserved
    </div>
    </>
  )
}

export default Footer

