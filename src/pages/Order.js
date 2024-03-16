import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";
import Ordercard from "../components/cards/Ordercard";
import { useMyOrderQuery } from "../redux/api/orderApi";
import Loader from "../components/cards/Loader";
const Order = () => {
  const [rows, setRows] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.user?.id;
  const { data, isLoading } = useMyOrderQuery(id);

  useEffect(() => {
    if (data) {
      const updatedRows = data.orders.map((i) => ({
        _id: i._id,
        user: i.user.name,
        amount: i.total,
        discount: i.discount,
        quantity: i.orderItems.length,
        status: i.status,
        createdAt: i.createdAt,
        action: (
          <Link to={`/admin/product/${i._id}`}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        ),
        orderItems: i.orderItems,
      }));
      setRows(updatedRows);
    }
  }, [data]);

 

  return (
    <>
      <Navbar />
      <main className="checkout-section py-5 px-5 mt-5">
        <div aria-label="breadcrumb">
          <ol class="breadcrumb pt-4">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Order History
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
         
        <div class="row gy-2">
          <div class="col-lg-3 col-sm-12">
            <Card />
          </div>
          <div class="col-lg-9 col-sm-12">
          {rows.map((row) => (
           <Ordercard
           img={""}
           price={row?.amount}
           quantity={row?.quantity}
           date={row?.createdAt}
           orderNumber={row?._id}
           status={row?.status}
           orderData={row?.orderItems}
           />
           ))}
           </div>
          </div>
           )
          }
      </main>
      <Footer />
    </>
  );
};

export default Order;
