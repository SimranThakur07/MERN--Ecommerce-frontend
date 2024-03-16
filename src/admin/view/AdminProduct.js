import React, { useEffect, useState } from "react";
import "../style/admin.css";
import Sidebar from "./partial/Sidebar";
import Header from "./partial/Header";
import { Link } from "react-router-dom";
import { useAllProductQuery } from "../../redux/api/productApi";
import { server } from "../../redux/store";
const AdminProduct = () => {
  const [rows, setRows] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"))
  const id = userData?.user?.id
  const { data } = useAllProductQuery(id);

    useEffect(() => {
      if (data) {
        const updatedRows = data.products.map((i) => ({
          photo: <img src={`${i.photo}`} alt="ProductImage" width={80} />,
          name: i.name,
          stock: i.stock,
          price: i.price,
          category: i.category,
          action: <Link to={`/admin/product/${i._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
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
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Product
              </li>
            </ol>
          </div>
          <div className="d-flex justify-content-end pe-2 mb-3">
          <Link to="/admin/addproduct"><i className="fa-solid fa-plus bg-danger  text-white  rounded-5 px-3 py-3 fw-bold "></i></Link>
          </div>
          <div className=" card p-4">
            <div className="d-flex justify-content-end mb-2">
              <input type="text" placeholder="Search..." className="w-25 " />
            </div>
            <div className="table-wrapper w-100  overflow-x-auto ">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{row.photo}</td>
        <td>{row.name}</td>
        <td>{row.price}</td>
        <td>{row.stock}</td>
        <td className=" text-capitalize ">{row.category}</td>
        <td>{row.action}</td>
      </tr>
    ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between  align-items-center ">
              <p className="m-0">Showing 1 to 10 of {rows.length} entries</p>
              <div aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link text-black " href="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link text-black " href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link text-black " href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link text-black " href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link text-black " href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
