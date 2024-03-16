import React, { useEffect, useState } from "react";
import "../style/admin.css";
import Sidebar from "./partial/Sidebar";
import Header from "./partial/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
} from "../../redux/api/productApi";
import { server } from "../../redux/store";
import Loader from "../../components/cards/Loader";
import { responseToast } from "../../utils/feature";
const AdminProductDetails = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?.user?.id;
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useProductDetailsQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const { name, price, stock, category } = data?.product || {
    name: "",
    price: "",
    stock: "",
    category: "",
  };
  const [nameUpdate, setNameUpdate] = useState(name);
  const [priceUpdate, setPriceUpdate] = useState(price);
  const [stockUpdate, setStockUpdate] = useState(stock);
  const [categoryUpdate, setCategoryUpdate] = useState(category);
  const [photo, setPhoto] = useState();
  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  useEffect(() => {
    if (data) {
      setNameUpdate(data.product.name);
      setPriceUpdate(data.product.price);
      setStockUpdate(data.product.stock);
      setCategoryUpdate(data.product.category);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (nameUpdate) formData.set("name", nameUpdate);
    if (priceUpdate) formData.set("price", priceUpdate.toString());
    if (stockUpdate !== undefined)
      formData.set("stock", stockUpdate.toString());
    if (categoryUpdate) formData.set("category", categoryUpdate);
    if (photo) formData.set("photo", photo);

    const res = await updateProduct({
      formData,
      userId: userId,
      productId: data.product._id,
    });

    responseToast(res, navigate, "/admin/product");
  };
  const handleDelete = async () => {
    const res = await deleteProduct({
      userId: userId,
      productId: data.product._id,
    });

    responseToast(res, navigate, "/admin/product");
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
          <div className=" card p-4 w-50 m-auto mb-4 position-relative ">
            <Link>
              <i className="fa-solid fa-trash position-absolute end-0  top-0  bg-danger  text-white rounded-5  p-2" onClick={handleDelete}></i>
            </Link>
            <h4 className=" text-center ">MANAGE</h4>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={nameUpdate}
                  required
                  placeholder="Product Name"
                  onChange={(e) => setNameUpdate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={priceUpdate}
                  required
                  placeholder="Enter Price"
                  onChange={(e) => setPriceUpdate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="stock"
                  name="stock"
                  value={stockUpdate}
                  required
                  placeholder="Enter Stock"
                  onChange={(e) => setStockUpdate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={categoryUpdate}
                  required
                  placeholder="Enter Category"
                  onChange={(e) => setCategoryUpdate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">
                  Photo
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="photo"
                  name="photo"
                  
                  multiple
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <button
                  className=" bg-primary  text-white  border-0  rounded-1 px-2 py-1"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
            <hr />
            <div className="row">
              <div className="col-lg-3">
                <img
                  src={`${server}${data?.product?.photo}`}
                  alt=""
                  width={120}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminProductDetails;
