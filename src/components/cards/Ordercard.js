import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/feature'

const Ordercard = (items) => {
const {   orderNumber, date, quantity, price, status, orderData } = items

  return (
    <>
     <div class="card rounded-1 border-0 shadow col-12 py-3 mb-2">
              <div class="d-flex justify-content-between align-items-center flex-wrap px-lg-5">
                {
                  orderData?.map((i) => (
                <div class="small-card-img">
                  <img src={i?.photo} alt="" height="50px" />
                </div>
                      
                      ))
                    }
                <div class="smallcard-body">
                  <Link
                    to="/order-detail"
                    class="bg-primary text-white  py-2 px-3 rounded-1 fw-semibold"
                  >
                    View Order
                  </Link>
                </div>
              </div>
              <div>
                <ul class="d-flex justify-content-between align-items-center flex-wrap px-3 order-list">
                  <li className='col-12 col-lg col-md pe-lg-5 pe-md-5'>
                    <span class="d-block fw-semibold">Order Number</span>
                    <span class="d-block">{orderNumber}</span>
                  </li>
                  <li  className='col-12 col-lg col-md'>
                    <span class="d-block fw-semibold">Purchased</span>
                    <span class="d-block">{formatDate(date)}</span>
                  </li>
                  <li className='col-12 col-lg col-md'>
                    <span class="d-block fw-semibold">Quantity</span>
                    <span class="d-block">X{quantity}</span>
                  </li>
                  <li className='col-12 col-lg col-md'>
                    <span class="d-block fw-semibold">Total</span>
                    <span class="d-block">
                      <i class="fa-solid fa-indian-rupee-sign"></i>{price}
                    </span>
                  </li>
                  <li className='col-12 col-lg col-md '>
                    <span class="d-block fw-semibold">Status</span>
                    <span
                     className={
                      status === "Processing"
                        ? "text-danger"
                        : status === "Delivered"
                        ? "text-success"
                        : " text-warning"
                    }
                    >{status}</span>
                  </li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default Ordercard