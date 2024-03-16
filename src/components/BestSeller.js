import React from 'react'
import {  FreeMode, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './cards/ProductCard'
import { useBestSellerQuery } from '../redux/api/productApi'
import toast from 'react-hot-toast'
import Loader from './cards/Loader'
import { addToCart } from '../redux/reducer/cartReducer';
import { useDispatch } from 'react-redux';
const BestSeller = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useBestSellerQuery()  

  if(isError) toast.error("Cannot fetched Product")

  const addToCartHandler = (cartItem) => {
    if(cartItem.stock < 1) return toast.error("Out of Stock")
    dispatch(addToCart(cartItem))
  toast.success("Added to Cart")
  }

  return (
    <>
    <div className="trending-product mt-5 p-4 px-5">
        <div className="product-heading seller">
            <p>Popular Item in the market</p>
            <h2>Best Sellers</h2>
        </div>
        <div className="container text-center mt-4">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
  <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode,  Autoplay]}
        className="mySwiper"
        breakpoints={{
          // When window width is >= 640px
          640: {
             slidesPerView: 1,
             spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
             slidesPerView: 4,
             spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
             slidesPerView: 4,
             spaceBetween: 20,
          },
       }}
      >
       {
      isLoading? <Loader/> :  data?.products?.map((i) =>(
    <SwiperSlide>
    <ProductCard
        productId={i?._id}
        photo={i?.photo}
        name={i?.name}
        category={i?.category}
        price={i?.price}
        stock={i?.stock}
        handler={addToCartHandler}
        />
    </SwiperSlide>
     ))
    }
    </Swiper>
  </div>
</div>
    </div>
    </>
  )
}

export default BestSeller