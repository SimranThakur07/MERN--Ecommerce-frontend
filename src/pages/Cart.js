import React, { useEffect, useState } from "react";
import "../styles/Product.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../redux/store";
import {
  addToCart,
  applyDiscount,
  calculatePrice,
  removeCartItem,
} from "../redux/reducer/cartReducer";
import axios from "axios";
import { truncate } from "../utils/feature";
const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const { cartItems, tax, shippingCharges, discount, total, subTotal } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  const increamentHandler = (cartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };

  const decreamentHandler = (cartItem) => {
    if (cartItem.quantity <= 1) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };

  const removeHandler = (productId) => {
    dispatch(removeCartItem(productId));
  };
  const parsePrice = (priceString) => {
    const numericString = priceString.replace(/[^0-9.-]+/g,"");
    return parseFloat(numericString);
  };

  useEffect(() => {
    const { token: cancelToken, cancel } = axios.CancelToken.source();

    const timeOutId = setTimeout(() => {
      axios
        .get(`${server}api/v1/payment/discount?coupon=${couponCode}`, {
          cancelToken,
        })
        .then((res) => {
          dispatch(applyDiscount(res.data.discount));
          dispatch(calculatePrice());
          setValidCoupon(true);
        })
        .catch(() => {
          dispatch(applyDiscount(0));
          dispatch(calculatePrice());
          setValidCoupon(false);
        });
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      cancel();
      setValidCoupon(false);
    };
  }, [couponCode]);

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <div className="col-11 pt-3 px-5 cart-body w-100 overflow-x-auto ">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </div>
      </div>
      <div className="container mb-2">
      <div className="row gy-2">
        <div className="col-lg-9 col-sm-12 pt-2">
        {cartItems.length > 0 ? (
              cartItems?.map((i, index) => (
          <div className="card rounded-1 col-12 py-1 mb-1">
            <div
              className="d-flex justify-content-between align-items-center flex-wrap px-3"
            >
              <div className="small-card-img">
                <img src={`${i.photo}`} alt={i.name} height={120} />
              </div>
              <div className="smallcard-body">
                <h5 className="card-title m-0"><Link to="">{truncate(i.name, 3)}</Link></h5>
                <div className="small-price text-danger fw-semibold my-1">
                  <i className="fa-solid fa-indian-rupee-sign"></i>  {i.price}
                </div>
                <span className="text-black-50">Size: M</span>
              </div>

              <div className="smallcard-body border mt-3 mt-lg-0  mt-md-0 ">
                <button className="py-2 px-3 border-end border-0 bg-transparent"
                 onClick={() =>
                  decreamentHandler({
                    productId: i.productId,
                    photo: i.photo,
                    category: i.category,
                    name: i.name,
                    price: i.price,
                    quantity: i.quantity,
                    stock: i.stock,
                  })
                }
                >
                  -
                </button>
                <span className="py-2 px-3">{i.quantity}</span>
                <button className="py-2 px-3 border-start border-0 bg-transparent"
                 onClick={() =>
                  increamentHandler({
                    productId: i.productId,
                    photo: i.photo,
                    category: i.category,
                    name: i.name,
                    price: i.price,
                    quantity: i.quantity,
                    stock: i.stock,
                  })
                }
                >
                  +
                </button>
              </div>
              <div className="smallcard-body">
                <div className="small-price text-danger fw-semibold my-2">
                  <i className="fa-solid fa-indian-rupee-sign"></i> {parsePrice(i.price) * i.quantity}
                </div>
              </div>
              <div className="smallcard-body">
              <Link onClick={() => removeHandler(i.productId)}>
                        <i className="fa-solid fa-trash"></i>
                      </Link>
              </div>
            </div>
          </div>
            ))
            ) : (
              <div className="card rounded-1 col-12 py-1 mb-1 text-center py-3 ">
              <h5>Your cart is empty!</h5>
                <p>Explore our wide selection and find something you like</p>
                <Link to='/' className=" btn btn-primary w-25 m-auto ">Continue Shopping</Link>
                </div>
            
            )}
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card border-0 rounded-1">
            <div className="card p-3 rounded-1 mt-2">
              <h6 className="fw-semibold">ORDER SUMMARY</h6>
              <ul className="ps-4">
                <li className="my-1 d-flex justify-content-between fw-semibold">
                  <span>Subtotal</span><span><i className="fa-solid fa-indian-rupee-sign"></i>{subTotal} </span>
                </li>
                <li className="my-1 d-flex justify-content-between">
                  <span>Delivery</span><span>{shippingCharges}</span>
                </li>
                <li className="my-1 d-flex justify-content-between">
                  <span>Tax</span><span>{tax}</span>
                </li>
              </ul>
              <hr />
              <div>
                <ul className="ps-4">
                  <li className="my-1 d-flex justify-content-between">
                    <h6 className="fw-semibold">TOTAL</h6>
                    <h6 className="fw-semibold"><i className="fa-solid fa-indian-rupee-sign"></i> {total}</h6>
                  </li>
                </ul>
              </div>
              <hr />
              <div>
                <ul className="ps-4">
                  <li
                    className="my-1 d-flex align-items-center justify-content-center coupon rounded-1 border  border-black border-2"
                  >
                    <input
                      type="text"
                      placeholder="Enter Coupon"
                      className="ps-1 w-75 rounded-1 border-0 py-1"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    /><button
                      className="w-25 py-1 add-to-cart text-center m-0 rounded-end-1 border-0 bg-primary text-white "
                    >
                      Apply
                    </button>
                    
                  </li>
                  {couponCode &&
                  (!validCoupon ? (
                    <p className="m-0 text-danger mt-2 ">
                      <i className="fa-solid fa-circle-exclamation"></i> Invalid
                      Coupon
                    </p>
                  ) : (
                    <p className="m-0 text-success mt-2 ">
                      ₹{discount} off using the <code>{couponCode}</code>
                    </p>
                  ))}
                </ul>
              </div>
              <hr />
              <Link to="/checkout" className="bg-primary text-white  py-2 rounded-1 text-center ">
                PROCCEES TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
