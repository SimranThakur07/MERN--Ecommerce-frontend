import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from '../../assest/placeholder.jpg'
import { truncate } from "../../utils/feature";
const ProductCard = ({
  productId,
  photo,
  category,
  name,
  price,
  stock,
  handler,
}) => {
  

  return (
    <>
      <div className="col gy-4" key={productId}>
        <div className="card-mg">
          <LazyLoadImage
            src={photo}
            placeholderSrc={img}
            alt={truncate(name, 4)}
            height={200}
            
          />

          <div className="card-mg-details">
            <Link to={`/product/${productId}`}>
              <span>
                <FaExternalLinkAlt />
              </span>
            </Link>
            <Link
              onClick={() =>
                handler({
                  productId,
                  photo,
                  category,
                  name,
                  price,
                  stock,
                  quantity: 1,
                })
              }
            >
              <span>
                <IoCartOutline />
              </span>
            </Link>
            <Link>
              <span>
                <FaRegHeart />
              </span>
            </Link>
          </div>
        </div>
        <div className="card-product-details px-1">
          <p className=" text-capitalize ">{category}</p>
          <h6 className=" text-capitalize fw-medium ">{truncate(name, 4)}</h6>
          <span>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {price}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
