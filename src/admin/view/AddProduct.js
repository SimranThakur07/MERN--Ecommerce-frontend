import React, { useState } from "react";
import "../style/admin.css";
import Sidebar from "./partial/Sidebar";
import Header from "./partial/Header";
import { useNewProductMutation } from "../../redux/api/productApi";
import { responseToast } from "../../utils/feature";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
const [ input, setInput ] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
})
const [photo, setPhoto] = useState()
const userData = JSON.parse(localStorage.getItem("userData"))
const id = userData?.user?.id
const navigate = useNavigate()
const [newProduct] = useNewProductMutation()

const handleChange = (e) => {
    setPhoto(e.target.files[0])
}

const handleSubmit = async (e) => {
    e.preventDefault()

    if(!input.name || !input.price || input.stock < 0 || !input.category || !photo) return;

    const formData = new FormData()
    formData.set("name", input.name)
    formData.set("stock", input.stock)
    formData.set("price", input.price.toString())
    formData.set("category", input.category)
    formData.set("photo", photo)

    const res = await newProduct({id: id, formData})

    responseToast(res, navigate, '/admin/product')

}

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
                Add Product
              </li>
            </ol>
          </div>
        </div>
        <div className=" card p-4 w-50 m-auto mb-4">
          <h3 className=" text-center ">New Product</h3>
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
                value={input.name}
                required
                placeholder="Product Name"
                onChange={(e) => setInput({...input, name: e.target.value})}
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
                value={input.price}
                required
                placeholder="Enter Price"
                onChange={(e) => setInput({...input, price: e.target.value})}
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
                value={input.stock}
                required
                placeholder="Enter Stock"
                onChange={(e) =>  setInput({...input, stock: e.target.value})}
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
                value={input.category}
                required
                placeholder="Enter Category"
                onChange={(e) =>  setInput({...input, category: e.target.value})}
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
                required
                multiple
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
             <button className=" bg-primary  text-white  border-0  rounded-1 px-2 py-1" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
