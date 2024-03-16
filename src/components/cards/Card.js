import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assest/random.jpeg'
const Card = () => {
  return (
    <>
     <div class="card border-0 rounded-1">
            <div
              class="card d-flex flex-row align-items-center p-3 border-0 rounded-1 shadow"
            >
              <div>
                <img
                  src={img1}
                  width="55"
                  alt=""
                  class="rounded-5"
                />
              </div>
              <div class="small-card-body ms-3">
                <span
                  >Hello, <br />
                  <span class="fw-semibold">User</span>
                </span>
              </div>
            </div>
            <div class="card p-3 border-0 rounded-1 shadow mt-2">
              <h6><i class="fa-solid fa-map"></i> Manage Account</h6>
              <ul class="ps-4">
                <li class="my-1"><Link >Profile Information</Link></li>
                <li class="my-1"><Link >Manage Address</Link></li>
                <li class="my-1"><Link >Change Password</Link></li>
              </ul>
              <hr />
              <div>
                <h6>
                  <Link><i class="fa-solid fa-box-open"></i> My Order History</Link>
                </h6>
                <ul class="ps-4">
                  <li class="my-1"><Link >My Return</Link></li>
                  <li class="my-1"><Link >My Order</Link></li>
                  <li class="my-1"><Link >My Cancellations</Link></li>
                </ul>
              </div>
              <hr />
              <div>
                <h6><i class="fa-regular fa-heart"></i> MY Wishlist</h6>
              </div>
              <hr />
              <div>
                <h6>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </h6>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card