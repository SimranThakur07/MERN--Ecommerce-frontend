import React from "react";
import { Link } from "react-router-dom";

const WishlistCard = (props) => {
  return (
    <>
      <div class="card rounded-1 border-0 shadow col-12 py-2 mb-2">
        <div class="d-flex justify-content-between align-items-center flex-wrap px-3">
          <div class="small-card-img">
            <img src={props.img} alt="" width={90} />
          </div>
          <div class="smallcard-body">
            <h5 class="card-title">
              <Link>{props.title}</Link>
            </h5>
            <span>
              Availability:
              <span class={props.text}>{props.availability}</span>
            </span>
          </div>
          <div class="smallcard-body">
            <div class="small-price text-primary fw-semibold my-2">
              <i class="fa-solid fa-indian-rupee-sign"></i> {props.price}
            </div>
          </div>
          <div class="smallcard-body">
            <button class="btn btn-primary  p-2 rounded-1">
              <i class="fa-solid fa-cart-shopping"></i> ADD TO CART
            </button>
          </div>
          <div class="smallcard-body">
            <Link href="">
              <i class="fa-solid fa-trash-can"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
