import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Details.css";
import img1 from "../assest/credit-card.png";
import img2 from "../assest/paypal.png";
import img3 from "../assest/cash-on.png";
import img4 from "../assest/payment-visa.png";
import img5 from "../assest/payment-master.png";
import img6 from "../assest/payment-express.png";
const Payment = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Navbar />
      <main className="checkout-section p-4 px-5">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Payment</li>
        </ol>
      </div>
        <div className="row gy-2">
          <div className="col-lg-8 col-sm-12 pt-2">
            <div className="bg-secondary-subtle mb-3 fw-medium  p-2">
              Select Payment Method
            </div>
            <div className="row g-3">
              <div className="col-lg-3">
                <Link id="credit-card" onClick={() => toggleTab(1)}>
                  <div className="payment-card card d-flex justify-content-center  align-items-center py-2 position-relative ">
                    <div className="pay-card d-flex align-items-center justify-content-center">
                      <img src={img1} alt="Credit Card" width="50" />
                    </div>
                    <span className="desc">Credit Card</span>
                    {activeTab === 1 && (
                      <i className="fa-solid fa-check position-absolute   bg-danger rounded-5 text-white p-1 cre-icon"></i>
                    )}
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link id="paypal-card" onClick={() => toggleTab(2)}>
                  <div className="payment-card card d-flex justify-content-center  align-items-center  py-2">
                    <div className="pay-card d-flex align-items-center justify-content-center">
                      <img src={img2} alt="Paypal" width="70" />
                    </div>
                    <span className="desc">Paypal</span>
                    {activeTab === 2 && (
                      <i className="fa-solid fa-check position-absolute    bg-danger rounded-5 text-white p-1 pay-icon"></i>
                    )}
                  </div>
                </Link>
              </div>

              <div className="col-lg-3">
                <Link id="cod-card" onClick={() => toggleTab(3)}>
                  <div className="payment-card card d-flex justify-content-center  align-items-center py-2">
                    <div className="pay-card d-flex align-items-center justify-content-center ">
                      <img src={img3} alt="CashonDelivery" width="50" />
                    </div>
                    <span className="desc">Cash on Delivery</span>
                    {activeTab === 3 && (
                      <i className="fa-solid fa-check position-absolute bg-danger rounded-5 text-white p-1 cod-icon"></i>
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <form
              className={
                activeTab === 1
                  ? "row g-3 w-100 shadow mt-3 p-3 rounded-1  active-card"
                  : "card-section"
              }
            >
              <div className="d-flex justify-content-between align-items-center ">
                <h6>Credit Card</h6>
                <div>
                  <img src={img4} alt="VisaCard" />
                  <img src={img5} alt="MasterCard" />
                  <img src={img6} alt="ExpressCard" />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Card Number <sup className="text-danger ">*</sup>
                </label>
                <input type="text" className="form-control" id="inputAddress" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Name on Card <sup className="text-danger ">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Expiration Date <sup className="text-danger ">*</sup>
                </label>
                <input type="date" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-lg-6">
                <label htmlFor="inputPassword4" className="form-label">
                  CVV <sup className="text-danger ">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-12 my-3">
                <Link
                  to="/confirmation"
                  className="bg-primary text-white  add-to-cart fw-semibold  py-2 rounded-1 w-100 text-center px-4 "
                >
                  PAY NOW
                </Link>
              </div>
            </form>
            <div
              className={
                activeTab === 2
                  ? "card border-0 shadow p-3 mt-3 active-card"
                  : "card-section"
              }
            >
              <div className="d-flex justify-content-between align-items-center py-3">
                <h6>Paypal</h6>
                <div>
                  <img src={img2} alt="VisaCard" />
                </div>
              </div>
              <p className="text-center ">Payment using your paypal</p>
              <Link to="/confirmation" className="text-center bg-primary text-white py-2 w-25 m-auto border-0  rounded-1 mb-3">
                PAY NOW
              </Link>
            </div>
            <div
              className={
                activeTab === 3
                  ? "card border-0 shadow p-3 mt-3 active-card"
                  : "card-section"
              }
            >
              <div className="d-flex justify-content-between align-items-center py-3">
                <h6>Cash On delivery</h6>
                <div>
                  <img src={img3} alt="VisaCard" />
                </div>
              </div>
              <p className="text-center w-50 m-auto  ">
                you can pay in cash to our courier when you receive the goods at
                your doorstep.
              </p>
              <Link to="/confirmation" className="text-center py-2 w-25 m-auto rounded-1 my-3 bg-primary text-white border-0 ">
                CONFIRM ORDER
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 pt-2">
            <div className="bg-secondary-subtle mb-3 mb-sm-0 fw-medium   p-2">
              Your Order
            </div>
            <div className="card border-0 rounded-1">
              <div className="card p-3 rounded-1 mt-2">
                <h6 className="fw-semibold">ORDER SUMMARY</h6>
                <hr />
                <ul className="ps-4">
                  <li className="mb-1 d-flex justify-content-between fw-medium ">
                    <span>
                      Beigh Knitted Shoes{" "}
                      <p className="desc text-dark-emphasis ">Size: M</p>
                    </span>
                    <span>X1</span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i> 1200
                    </span>
                  </li>
                  <li className="mb-1 d-flex justify-content-between fw-medium ">
                    <span>
                      Beigh Knitted Shoes{" "}
                      <p className="desc text-dark-emphasis ">Colour: Red</p>
                    </span>
                    <span>X2</span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i> 8000
                    </span>
                  </li>
                  <li className="mb-1 d-flex justify-content-between fw-medium ">
                    <span>
                      Beigh Knitted Shoes{" "}
                      <p className="desc text-dark-emphasis ">Colour: Red</p>
                    </span>
                    <span>X1</span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i> 5000
                    </span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between fw-semibold  ">
                    <span>SUBTOTAL</span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i> 12000
                    </span>
                  </li>
                </ul>
                <hr />
                <div>
                  <ul className="ps-4">
                    <li className="my-1 d-flex justify-content-between">
                      <h6 className="fw-semibold">SHIPPING</h6>
                      <h6 className="fw-semibold">FREE</h6>
                    </li>
                    <hr />
                    <li className="my-1 d-flex justify-content-between">
                      <h6 className="fw-semibold">TOTAL</h6>
                      <h6 className="fw-semibold">
                        <i className="fa-solid fa-indian-rupee-sign"></i> 12000
                      </h6>
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

export default Payment;
