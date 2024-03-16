import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../assest/avatar-1.jpg'
const Header = () => {
const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
    <header className='admin-header p-4 bg-white d-flex justify-content-between  align-items-center  '>
        <div className='d-flex  align-items-center '>
        <Link className="admin-toggler"><i class="fa-solid fa-bars fs-4"></i></Link>
        <div className=' ms-4  bg-secondary-subtle  rounded-5 position-relative '>
            <input type="text" placeholder='Search...' className=' border-0 bg-transparent w-100 py-1 px-2 rounded-5 ' />
            <i class="fa-solid fa-magnifying-glass position-absolute end-0 mt-2 me-2 "></i>
        </div>
        </div>
        <div className='position-relative'>
            <Link><i class="fa-solid fa-bell me-4 fs-5"><sup>3</sup></i></Link>
            <img src={avatar} alt="" width={40} className=' rounded-5 me-2' />
            <Link className=' text-dark-emphasis ' onClick={() => setShowDropdown(!showDropdown)}>Jennifer <i class="fa-solid fa-angle-down"></i></Link>
            {
                showDropdown && (
            <div className="admin-dropdown-menu position-absolute  end-0  top-100 bg-white pt-3 ps-3 rounded-1 z-1  ">
                <span className='text-dark-emphasis wel fw-medium '>Welcome!</span>
                <ul className=' pb-2 px-4'>
                    <li className='my-3 text-dark-emphasis '><Link><i class="fa-regular fa-user me-2"></i>My Profile</Link></li>
                    <li className='my-3 text-dark-emphasis '><Link><i class="fa-solid fa-gear me-2"></i>Setting</Link></li>
                    <li className='my-3 text-dark-emphasis '><Link><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</Link></li>
                </ul>
            </div>
                     
                     )
                    }
        </div>
    </header>
    </>
  )
}

export default Header