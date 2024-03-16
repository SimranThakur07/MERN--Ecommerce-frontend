import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/cards/Card";
import '../styles/Details.css'
const OrderDetails = () => {
  return (
    <>
      <Navbar />
      <main className="p-4 px-5 cart-body">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Order Details
            </li>
          </ol>
        </div> 
        <div className="row gy-2">
          <div className="col-lg-3 col-sm-12">
            <Card />
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="card rounded-1 border-0 shadow col-12 py-3 mb-2">
              <div>
                <ul className="d-flex justify-content-between align-items-center flex-wrap px-3 order-list">
                  <li>
                    <span className="d-block fw-semibold">Sold By</span>
                    <span className="d-block text-danger">Dummy</span>
                  </li>
                  <li>
                    <span className="d-block fw-semibold">Order Number</span>
                    <span className="d-block">23E34RT3</span>
                  </li>
                  <li>
                    <span className="d-block fw-semibold">Shipped Date</span>
                    <span className="d-block">01 March 2024</span>
                  </li>
                  <li>
                    <a
                      href="./orderdetails.html"
                      className="checkout-btn py-2 px-3 rounded-1 fw-semibold"
                    >
                      Write A Review
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-5 status-bar">
                <div className="line position-relative">
                  <span className="">
                    <i className="fa-solid fa-circle text-success"></i>Processing
                  </span>
                  <span>
                    <i className="fa-solid fa-circle text-success"></i>Shipped
                  </span>
                  <span>
                    <i className="fa-solid fa-circle text-success"></i>Delivered
                  </span>
                </div>
              </div>
              <div className="card rounded-0 mx-4 mb-5 d-flex flex-row flex-wrap align-items-center justify-content-between px-2 py-3 text-dark-emphasis status-msg">
                <span>23 Feb 2024.18.56</span>
                <span>
                  Your package has been delivered. Thank you for shopping at
                  DUMMY!
                </span>
              </div>
              <div>
                <ul className="d-flex justify-content-between align-items-center flex-wrap px-3 order-list">
                  <li>
                    <img src="./assest/headphone-3.png" alt="" width="60" />
                  </li>
                  <li>
                    <span className="d-block fw-semibold">
                      Sound Intone I65 Earphone
                    </span>
                    <span className="d-block text-dark-emphasis">
                      No Warranty Available
                    </span>
                  </li>
                  <li className="fw-semibold">
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign"></i>2000
                    </span>
                  </li>
                  <li className="fw-semibold">
                    <span>Qty:</span>
                    <span>1</span>
                  </li>

                  <li>
                    <a
                      href="./orderdetails.html"
                      className="py-2 px-3 rounded-1 fw-semibold text-danger"
                    >
                      RETURN
                    </a>
                    <span className="d-block">Until 24Apr 2024</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row order-address">
              <div className="col-lg-4 col-sm-12 mb-2">
                <div className="card rounded-1 border-0 shadow px-3 py-4">
                  <h6>Shipping Address</h6>
                  <p className="fw-semibold m-0">John Doe</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, 36363</p>
                  <span>+91 00000000</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 mb-2">
                <div className="card rounded-1 border-0 shadow px-3 py-4">
                  <h6>Billing Address</h6>
                  <p className="fw-semibold m-0">John Doe</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, 36363</p>
                  <span>+91 00000000</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card rounded-1 border-0 shadow px-3 py-4">
                  <h6>Total Summary</h6>
                  <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>1000</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Shipping Fee</span>
                    <span>100</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="fw-medium">Total</span>
                    <span>1000</span>
                  </div>
                  <p>Paid by Cash on Delivery</p>
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

export default OrderDetails;
