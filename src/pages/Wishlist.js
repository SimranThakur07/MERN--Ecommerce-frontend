import React from 'react'
import '../styles/Product.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img2 from '../assest/product2.webp'
import WishlistCard from '../components/cards/WishlistCard'
import Card from '../components/cards/Card'
const Wishlist = () => {
  return (
    <>
    <Navbar/>
    <main class="p-4 px-5 cart-body">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
        </ol>
      </div>
      <div class="row gy-2">
        <div class="col-lg-3 col-sm-12">
         <Card/>
        </div>
        <div class="col-lg-9 col-sm-12">
          <WishlistCard
          img={img2}
          title="Headphone"
          price=" 999"
          availability={"In Stock"}
          text={"text-success"}
          />
          <WishlistCard
          img={img2}
          title="Headphone"
          price=" 999"
          availability={"In Stock"}
          text={"text-danger"}
          />
        </div>
      </div>
    </main>
    <Footer/>
    
    </>
  )
}

export default Wishlist