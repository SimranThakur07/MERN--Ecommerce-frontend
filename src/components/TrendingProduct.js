import React from 'react'
import ProductCard from './cards/ProductCard'
import { useLatestProductQuery } from '../redux/api/productApi'
import toast from 'react-hot-toast'
import Loader from './cards/Loader'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducer/cartReducer'
const TrendingProduct = () => {
const { data, isLoading, isError } = useLatestProductQuery()  
const dispatch = useDispatch()
if(isError) toast.error("Cannot fetched Product")

const addToCartHandler = (cartItem) => {
  if(cartItem.stock < 1) return toast.error("Out of Stock")
  dispatch(addToCart(cartItem))
toast.success("Added to Cart")
}
  return (
    <>
    <div className="trending-product mt-5 p-4 px-5">
        <div className="product-heading">
            <p>Popular Item in the market</p>
            <h2>Latest Product</h2>
        </div>
        <div className="container text-center mt-4">
  <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    {
      isLoading? <Loader/> :  data?.products?.map((i) =>(
        <ProductCard
        productId={i?._id}
        photo={i?.photo}
        name={i?.name}
        category={i?.category}
        price={i?.price}
        stock={i?.stock}
        handler={addToCartHandler}
        />
      ))
    }
  </div>
</div>
    </div>
    </>
  )
}

export default TrendingProduct 