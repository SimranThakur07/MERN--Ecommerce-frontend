import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Details.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../redux/store";
import toast from "react-hot-toast";
import { saveShippingInfo } from "../redux/reducer/cartReducer";

const Checkout = () => {
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    city: "",
    state: "",
    country: "",
    address: "",
    pinCode: "",
    
  });
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData?.user?.name
  const userEmail = userData?.user?.email
  const { cartItems, shippingCharges, total } = useSelector(
    (state) => state.cartReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.city || !input.address || !input.pinCode || !input.city) {
      setError("All Feilds are required");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    dispatch(saveShippingInfo(input));
  
    try {
      const { data } = await axios.post(
        `${server}api/v1/payment/create`,
        {
          amount: total,
          description: "Product Description",
          name: userName,
          email: userEmail,
          address: {
            line1: input.address,
            city: input.city,
            state: input.state,
            postal_code: input.pinCode,
            country: input.country
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/pay", {
        state: data.clientSecret,
       
      });
    } catch (error) {
      console.log(Error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (cartItems.length <= 0) return navigate("/cart");
  }, [cartItems]);


  return (
    <>
      <Navbar />
      <main className="checkout-section p-4 px-5">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
        <div className="row gy-2">
          <div className="col-lg-8 col-sm-12 pt-2">
            <div className="bg-secondary-subtle mb-3 fw-medium  p-2">
              Details
              <p className=" text-danger p-0 m-0">{error}</p>
            </div>
            <form className="row g-3 w-100" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="country" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  required
                  placeholder="1234 Main St"
                  value={input.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  required
                  placeholder="1234 Main St"
                  value={input.country}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  required
                  value={input.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  className="form-select"
                  value={input.state}
                  onChange={handleChange}
                >
                  <option >Choose...</option>
                  <option className="Up">Up</option>
                  <option className="Bihar">Bihar</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="pincode" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  name="pinCode"
                  required
                  value={input.pincode}
                  onChange={handleChange}
                />
              </div>
              
            </form>
          </div>
          <div className="col-lg-4 col-sm-12 pt-2">
            <div className="bg-secondary-subtle mb-3 mb-sm-0 fw-medium   p-2">
              Your Order
            </div>
            <div className="card border-0 rounded-1">
              <div className="card p-3 rounded-1 mt-2">
                <h6 className="fw-semibold">PRODUCT</h6>
                <hr />
                <ul className="ps-3">
                  {cartItems &&
                    cartItems?.map((i) => (
                      <li
                        className="mb-1 d-flex justify-content-between fw-medium "
                        key={i._id}
                      >
                        <span>
                          {i.name}{" "}
                          <p className="desc text-dark-emphasis text-capitalize  ">
                            Category: {i.category}
                          </p>
                        </span>
                        <span>X{i.quantity}</span>
                        <span>
                          <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          {i.price}
                        </span>
                      </li>
                    ))}
                  <li className="mb-2 d-flex justify-content-between fw-semibold  ">
                    <span>SUBTOTAL</span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i> {total}
                    </span>
                  </li>
                </ul>
                <hr />
                <div>
                  <ul className="ps-4">
                    <li className="my-1 d-flex justify-content-between">
                      <h6 className="fw-semibold">SHIPPING</h6>
                      <h6 className="fw-semibold">{shippingCharges}</h6>
                    </li>
                    <hr />
                    <li className="my-1 d-flex justify-content-between">
                      <h6 className="fw-semibold">TOTAL</h6>
                      <h6 className="fw-semibold">
                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                        {total}
                      </h6>
                    </li>
                    <hr />
                    <li className="my-1 d-flex justify-content-between">
                      <label htmlFor="">
                        <input type="checkbox" name="" id="" /> Agree to our{" "}
                        <Link className="text-danger ">terms & conditions</Link>
                      </label>
                    </li>
                    <li className="d-flex mt-3">
                      <Link
                        onClick={handleSubmit}
                        className="btn btn-primary fw-semibold  py-2 rounded-1 w-100 text-center text-white  "
                      >
                        PLACE ORDER
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
