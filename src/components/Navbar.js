import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown, FaBagShopping, FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import '../styles/Navbar.css'
import img from '../assest/random.jpeg'
import { FaGripLinesVertical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/reducer/reducer";
import SearchCard from "./cards/SearchCard";
import { logout } from "../redux/reducer/userReducer";
import { useSearchAllProductQuery } from "../redux/api/productApi";

const Navbar = () => {
  const [isOppen, setIsopen] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState("")
  const isSidebarOpen = useSelector((state) => state.myReducer.isSidebarOpen);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user)
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
    if(search){
      setShowSearch(true)
    }
    else{
      setShowSearch(false)
    }
  }
  const { data: searchData } = useSearchAllProductQuery({ search });

  const handleLogout= () => {
    dispatch(logout())
  }
  
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h3><Link to="/">Logo</Link></h3>
          </div>
          <div className="search-box d-flex  align-items-center ps-2 rounded-1 position-relative">
          <input className="" type="text p-1" placeholder="Search Product" value={search} onChange={handleSearch} onBlur={() => setShowSearch(false)}  />
              <Link to="" className="bg-primary text-white text-center p-1" >
                <IoSearch />
              </Link>
              {
                showSearch && (
                  <SearchCard
                  searchData={searchData}
                  />
                )
              }
          </div>
          <ul className={!isSidebarOpen ? "list-items" : "list-items open p-0"}>
            <li className="upper-box w-100 flex-column justify-content-center ps-4 text-white  ">
              <img src={img} alt="" width={70} className=" rounded-5 "/>
              <div className="mt-3">
                <Link>Login</Link>
                <FaGripLinesVertical />
                <Link>Sign Up</Link>
              </div>
            </li>
                <li className="nav-items">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/product-category">Category</NavLink>
                </li>
            
            <li className="nav-items">
              <span>
               <NavLink to="/wishlist"> <FaRegHeart /><sup>&#40;0&#41;</sup>
               <span className="sm-text d-lg-block d-sm-inline  ">Wishlist</span>
               </NavLink>

              </span>
            </li>
            <li className="nav-items">
              <span>
               <NavLink to="/cart"> <AiOutlineShoppingCart /><sup>&#40;{cartItems.length}&#41;</sup>
               <span className="sm-text  d-lg-block d-sm-inline  ">Cart</span>
               </NavLink>
              </span>
            </li>
            {
              user ? (
                <>
               <li className="nav-items position-relative " onClick={() =>setIsopen((prev) => !prev)}>
                <FaUser/> <sub><FaAngleDown/> </sub>
                {
                  isOppen && (
               <div className=" position-absolute top-100 translate-middle-x bg-white pt-4 " style={{width: "180px"}}>
                <ul className=" ps-0 w-100 ">
                  <li className=" my-2 px-4"> <NavLink to="/admin/dashboard"><MdAdminPanelSettings /> Admin</NavLink></li>
                  <hr />
                  <li className=" my-2 px-4"> <FaUser/> Profile</li>
                  <hr />
                  <li className=" my-2 px-4"><NavLink to="/order"><FaBagShopping/> My Order</NavLink></li> 
                  <hr />
                  <li className=" my-2 px-4" onClick={handleLogout}><FaSignOutAlt/> Logout</li>
                </ul>
               </div>
                    
                    )
                  }
               </li>
                </>
              )
              : 
              (
            <li className="nav-items">
              <NavLink to="/signin" className="btn btn-primary  text-white ">Login</NavLink>
            </li>
              )
            }
          </ul>
          <div className="toggler" onClick={handleToggleSidebar}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
