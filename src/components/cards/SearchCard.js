import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
const SearchCard = ({searchData}) => {
  return (
    <>
    <ul className="search-list position-absolute  start-0  bg-white  w-100 rounded-bottom  ps-0 py-2 ">
   {/* { searchData?.products?.map((i) => ( */}
    <>
        {/* <li className='ps-4'><Link to="/product-category"><IoSearch /></Link></li>   */}
        <hr />
        </>
    {/* ))} */}
    
    </ul>
    
    </>
  )
}

export default SearchCard