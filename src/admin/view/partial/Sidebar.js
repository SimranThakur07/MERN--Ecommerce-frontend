import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTachometerAlt } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBoxes, FaUserCircle  } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar py-3">
        <h2 className='text-white text-center m-0 logo'>LOGO</h2>
        <ul className="list mt-5 ps-0 ">
            <li className='sidebar-nav-list my-3 fs-6'><NavLink to="/admin/dashboard" className="nav-link ps-3"><FaTachometerAlt /><span className="ms-3 ">Dashboard</span></NavLink></li>
            <li className='sidebar-nav-list  my-3 fs-6'><NavLink to="/admin/category" className="nav-link ps-3"><TbCategoryPlus /><span  className="ms-3 ">Category</span></NavLink></li>
            <li className='sidebar-nav-list  my-3 fs-6'><NavLink to="/admin/product" className="nav-link ps-3"><FaBoxes /><span  className="ms-3 ">Product</span></NavLink></li>
            <li className='sidebar-nav-list  my-3 fs-6'><NavLink to="/admin/cart" className="nav-link ps-3"><FaCartShopping /><span  className="ms-3 ">Order</span></NavLink></li>
            {/* <li className='sidebar-nav-list  my-3 fs-6'><NavLink to="/admin/wishlist" className="nav-link ps-3"><FaRegHeart /><span  className="ms-3 ">Wishlist</span></NavLink></li> */}
            <li className='sidebar-nav-list  my-3 fs-6'><NavLink to="/admin/client" className="nav-link ps-3"><FaUserCircle /><span  className="ms-3 ">Customer</span></NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar