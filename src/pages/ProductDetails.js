import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopProjectCard from "../components/cards/TopProjectCard";
import "../styles/Details.css";
import { FaRegHeart } from "react-icons/fa";
import Review from "../components/Review/Review";
import { useProductDetailsQuery } from "../redux/api/productApi";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";
import toast from "react-hot-toast";
import Loader from "../components/cards/Loader";
import Magnifier from "react-magnifier";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductDetailsQuery(id);
  const dispatch = useDispatch();

  const addToCartHandler = (cartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to Cart");
  };

  return (
    <>
      <Navbar />

      <main className="category-section px-3 px-lg-5  py-3">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-12  detail-img">
              <Magnifier src={`${data?.product?.photo}`} height={400}  />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex details justify-content-center flex-column">
              <h3>{data.product.name}</h3>
              <span className="detail-price my-2">{data.product.price}</span>
              <div className="cate">
                <p className=" text-capitalize ">
                  Category <span>: {data.product.category}</span>
                </p>
                <p>
                  Availibility
                  {data.product.stock > 0 ? (
                    <span className=" text-success ">: In Stock</span>
                  ) : (
                    <span className=" text-danger ">: Out of Stock</span>
                  )}
                </p>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis deleniti, qui dolores, non accusantium consectetur
                facilis veritatis aspernatur quibusdam dolorem iure sint ducimus
                enim minus odit itaque, quis tempora earum?
              </p>
              <hr />
              <div className="detail-btn">
                {data.product.stock > 0 && (
                  <button
                    className="add-to-cart ms-lg-4 ms-1"
                    onClick={() =>
                      addToCartHandler({
                        productId: data.product.productId,
                        photo: data.product.photo,
                        category: data.product.category,
                        name: data.product.name,
                        price: data.product.price,
                        stock: data.product.stock,
                        quantity: 1,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                )}
                <button className=" border-0 bg-danger text-white rounded-5 py-2 px-4 ms-2">
                  <FaRegHeart /> Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
        <Review />

        <TopProjectCard />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
