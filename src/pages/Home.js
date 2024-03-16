import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Home/Banner'
import ProductSlider from '../components/ProductSlider'
import TrendingProduct from '../components/TrendingProduct'
import SaleBanner from '../components/SaleBanner'
import BestSeller from '../components/BestSeller'
import Footer from '../components/Footer'
import Supscription from '../components/Supscription'

const Home = () => {
  return (
    <>
  
    <Navbar/>
    <Banner/>
    {/* <ProductSlider/> */}
    <TrendingProduct/>
    <SaleBanner/>
    <BestSeller/>
    <Supscription/>
    <Footer/>
    </>
  )
}

export default Home