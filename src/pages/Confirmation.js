import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <Navbar />
      <main className="checkout-section py-5 px-3">
        <p className="text-center m-auto text-primary  fs-5">
          Thank you. Your order has been received.
        </p>
        <Link to="/" className="btn btn-primary border-0 text-white m-auto d-block w-25 my-3">Continue Shoping</Link>
        <div class="container mt-4 ">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-12 ">
              <div className="confirmation-box ps-4 py-4">
                <h5>Order Info</h5>
                <div className="mt-3">
                  <p className="text-black-50 fs-6">
                  Order number
                    <span className="ms-3 text-dark ">: 60235</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Date
                    <span className="ms-3 text-dark ">: Jan 03, 2024</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Total
                    <span className="ms-3 text-dark ">: USD 2210</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Payment method	
                    <span className="ms-3 text-dark ">: Check payments</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 ">
              <div className="confirmation-box ps-4 py-4">
                <h5>Billing Address</h5>
                <div className="mt-3">
                  <p className="text-black-50 fs-6">
                  Street
                    <span className="ms-3 text-dark ">: 56/8 panthapath</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  City
                    <span className="ms-3 text-dark ">: Delhi</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Country
                    <span className="ms-3 text-dark ">: India</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Postcode	
                    <span className="ms-3 text-dark ">: 859488</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12">
              <div className="confirmation-box ps-4 py-4">
                <h5>Shipping Address</h5>
                <div className="mt-3">
                  <p className="text-black-50 fs-6">
                  Street
                    <span className="ms-3 text-dark ">: 56/8 panthapath</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  City
                    <span className="ms-3 text-dark ">: Delhi</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Country
                    <span className="ms-3 text-dark ">: India</span>
                  </p>
                  <p className="text-black-50 fs-6">
                  Postcode	
                    <span className="ms-3 text-dark ">: 859488</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 confirmation-box p-4">
            <h5>Order Details</h5>
            <hr />
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="text-center">Quantity</th>
                        <th className="pe-3 text-end">Total</th>
                    </tr>
                </thead>
                <tbody>
          <tr>
          <td className='text-black-50 pt-3 ps-2'>Fresh Blackberry </td>
          <td className='text-center'>X 02</td>
          <td className='text-black-50 pe-3 text-end'><i class="fa-solid fa-indian-rupee-sign"></i> 720</td>
          </tr>
          <tr>
          <td className='text-black-50 pt-3 ps-2'>Fresh Tomatoes </td>
          <td className='text-center'>X 02</td>
          <td className='text-black-50 pe-3 text-end'><i class="fa-solid fa-indian-rupee-sign"></i> 720</td>
          </tr>
          <tr>
          <td className='text-black-50 pt-3 ps-2'>Fresh Tomatoes </td>
          <td className='text-center'>X 02</td>
          <td className='text-black-50 pe-3 text-end'><i class="fa-solid fa-indian-rupee-sign"></i> 720</td>
          </tr>
          <tr>
          <td className='pt-3 ps-2 fw-bold'>SUBTOTAL</td>
          <td className='text-center'></td>
          <td className='text-black-50 pe-3 text-end'><i class="fa-solid fa-indian-rupee-sign"></i> 2160</td>
          </tr>
          <tr>
          <td className='pt-3 ps-2 fw-bold'>SHIPPING</td>
          <td className='text-center'></td>
          <td className='text-black-50 pe-3 text-end'>Flat Rate: <i class="fa-solid fa-indian-rupee-sign"></i> 50.00</td>
          </tr>
          <tr>
          <td className='pt-3 ps-3 fw-bold '>TOTAL</td>
          <td className=' ps-5'></td>
          <td className=' pe-3 text-end fw-bold '><i class="fa-solid fa-indian-rupee-sign"></i>2210</td>
          </tr>
        </tbody>
            </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Confirmation;
