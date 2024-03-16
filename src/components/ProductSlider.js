import React from 'react'
import '../styles/Product.css'
import {  FreeMode, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assest/product1.webp'
import { useAllCategoryQuery } from '../redux/api/productApi';
import Loader from './cards/Loader';
const ProductSlider = () => {
  const {
    data: categoryData,
    isLoading: loadingCategory,
  } = useAllCategoryQuery();


  return (
    <>{
      loadingCategory ? (
        <Loader/>
      )
      : 
  (
 
    <div className="productSlider mt-3">
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
             slidesPerView: 2,
             spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
             slidesPerView: 5,
             spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
             slidesPerView: 6,
             spaceBetween: 20,
          },
       }}
      >
        {
          categoryData?.categories?.map((i, idx) => (
        <SwiperSlide key={idx}>
        <div className="slider-product">
         <img src={img1} alt="Product" />
        <div className="slider-deatils">
            <div className="blue-box">
                <h5 className='  text-capitalize '>{i}</h5>
                <p>Product</p>
            </div>
        </div>
        </div>
        </SwiperSlide>
            
            ))
          }
      </Swiper>
    </div>
       
  )
}
    </>
  )
}

export default ProductSlider