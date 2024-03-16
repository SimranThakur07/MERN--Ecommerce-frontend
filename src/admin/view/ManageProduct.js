import React from "react";
import "../style/admin.css";
import Sidebar from "./partial/Sidebar";
import Header from "./partial/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { server } from "../../redux/store";
import Loader from "../../components/cards/Loader";
import { responseToast } from "../../utils/feature";
import { useDeleteOrderMutation, useOrderDetailsQuery, useUpdateOrderMutation } from "../../redux/api/orderApi";

const defaultData = {
    shippingInfo:{
        address: "",
        city: "",
        pincode: "",
        state: "",
        country: ""
    },
    status: 0,
    subtotal: 0,
    discount: 0,
    shippingCharges: 0,
    tax: 0,
    total: 0,
    orderItems: [],
    user: {name: "", _id: "",},
    _id: ""
}

const ManageProduct = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.user?.id;
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useOrderDetailsQuery(id);
    const [updateOrder] = useUpdateOrderMutation();
    const [deleteOrder] = useDeleteOrderMutation();
    const { shippingInfo: {address, city, pincode, state, country}, orderItems, user: {name}, status, subtotal, discount, total, tax, shippingCharges} = data?.order || defaultData
  

  const handleUpdate = async () => {
    
    const res = await updateOrder({
        userId: userId,
        orderId: data.order._id
    })
    responseToast(res, navigate, "/admin/cart")
  };
  const handleDelete = async () => {
    const res = await deleteOrder({
      userId: userId,
      orderId: data.order._id,
    });

    responseToast(res, navigate, "/admin/cart");
  };



  return (
    <>
    <Sidebar />
    <div className="main-context  ">
      <Header />
      <div className="admin-dashboard p-4">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product Details
            </li>
          </ol>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
        <div className="row ">
        <div className="col-lg-5 card p-4  m-auto mb-4 min-vh-100 ">
        <h4 className=" text-center ">ORDER ITEMS</h4>
        {
            orderItems.map((i) => ( 
        <div className="d-flex justify-content-between pt-3">
            <div>
                <div className="mb-2">
                    <img src={`${server}${i.photo}`} alt=""  width={150} />
                </div>
                <div>
                <span className="fw-medium">{i.name}</span>
                </div>
            </div>
            <div>
                <span>{i.price} X {i.quantity} = <i class="fa-solid fa-indian-rupee-sign"></i>{i.price * i.quantity}</span>
            </div>
        </div>
               
               ))
            }
      </div>
        <div className="col-lg-6 card p-4  m-auto mb-4 position-relative min-vh-100">
          <Link>
            <i className="fa-solid fa-trash position-absolute end-0  top-0  bg-danger  text-white rounded-5  p-2" onClick={handleDelete}></i>
          </Link>
          <h4 className=" text-center ">ORDER INFO</h4>
          <div>
            <h5>User Info</h5>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name:
              </label>
             <span className="ms-2">{name}</span>
            </div>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Address:
              </label>
             <span className="ms-2">{address},{city},{state},{country},{pincode}</span>
            </div>
            <h5>Amount Info</h5>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                <span >SubTotal:</span>
              </label>
              
            <span className="ms-2"> <i class="fa-solid fa-indian-rupee-sign"></i>{subtotal}</span>
         
            </div>
          
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput2" className="form-label">
               Tax:
              </label>
             <span className="ms-2"><i class="fa-solid fa-indian-rupee-sign"></i>{tax}</span>
            </div>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Discount:
              </label>
            <span className="ms-2"> <i class="fa-solid fa-indian-rupee-sign"></i>{discount}</span>
            </div>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Shipping Charges:
              </label>
              {
               shippingCharges && (
            <span className="ms-2"> <i class="fa-solid fa-indian-rupee-sign"></i>{shippingCharges}</span>
                     
            )
        }
            </div>
            <div className="mb-1">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Total:
              </label>
            <span className="ms-2"> <i class="fa-solid fa-indian-rupee-sign"></i>{total}</span>
            </div>
            <h5>Status Info</h5>
            <div className="mb-4">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Status:
              </label>
             <span className={status === "processing" ? "text-danger ms-2" : "text-success ms-2"}>{status}</span>
             </div>
            <div className="mb-3">
              <button
                className=" bg-primary  text-white  border-0  rounded-1 px-2 py-1 w-50 m-auto d-block"
                type="submit" onClick={handleUpdate}
              >
                Process Status
              </button>
            </div>
          </div>
         
        </div>
        </div>
        </div>
      )}
    </div>
  </>
  )
}

export default ManageProduct