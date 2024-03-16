import React, { useEffect, useState } from "react";
import "../style/admin.css";
import Sidebar from "./partial/Sidebar";
import Header from "./partial/Header";
import { Link } from "react-router-dom";
import { useAllOrderQuery } from "../../redux/api/orderApi";
import Loader from "../../components/cards/Loader";
const AdminCart = () => {
  const [rows, setRows] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.user?.id;
  const { data, isLoading } = useAllOrderQuery(id);

  useEffect(() => {
    if (data) {
      const updatedRows = data.orders.map((i) => ({
        user: i.user.name,
        amount: i.total,
        discount: i.discount,
        quantity: i.orderItems.length,
        status: (
          <span
            className={
              i.status === "processing"
                ? "text-danger "
                : i.status === "Delivered"
                ? "text-success "
                : " text-warning "
            }
          >
            {i.status}
          </span>
        ),
        action: (
          <Link to={`/admin/cart/${i._id}`}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        ),
      }));
      setRows(updatedRows);
    }
  }, [data]);

  return (
    <>
      <Sidebar />
      <div className="main-context  ">
        <Header />
        <div className="admin-dashboard p-4">
          <div aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </div>
          {
            isLoading ? 
            (
              <Loader/>
            )
            : 
            (
          <div className=" card p-4">
            <div className="d-flex justify-content-end mb-2">
              <input type="text" placeholder="Search..." className="w-25 " />
            </div>
            <div className="table-wrapper w-100  overflow-x-auto ">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{row.user}</td>
                      <td>{row.amount}</td>
                      <td>{row.discount}</td>
                      <td>{row.quantity}</td>
                      <td className=" text-capitalize ">{row.status}</td>
                      <td>{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between  align-items-center ">
              <p className="m-0">Showing 1 to {rows.length} of {rows.length}</p>
              <div aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <Link class="page-link text-black " href="#">
                      Previous
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link text-black " href="#">
                      1
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link text-black " href="#">
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link text-black " href="#">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link text-black " href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
             )
            }
        </div>
      </div>
    </>
  );
};

export default AdminCart;
