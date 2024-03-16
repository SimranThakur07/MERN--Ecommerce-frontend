import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNewOrderMutation } from "../redux/api/orderApi";
import { resetCart } from "../redux/reducer/cartReducer";
import { responseToast } from "../utils/feature";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.user?.id;
  const {
    shippingInfo,
    cartItems,
    subTotal,
    tax,
    total,
    shippingCharges,
    discount,
  } = useSelector((state) => state.cartReducer);
  const [isProcessing, setIsProcessing] = useState(false);

  const [newOrder] = useNewOrderMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe && !elements) return;
    setIsProcessing(true);

    const orderData = {
      shippingInfo,
      orderItems: cartItems,
      subTotal,
      tax,
      total,
      shippingCharges,
      discount,
      user: id,
    };

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });
    
    if (error) {
      setIsProcessing(false);
      return toast.error(error.message || "Something went wrong");
    }

    if (paymentIntent.status === "succeeded") {
      const res = await newOrder(orderData)
      dispatch(resetCart())
      responseToast(res, navigate, '/order')
    }
    setIsProcessing(false);
  };
  return (
    <div className=" vw-100  vh-100  d-flex  align-items-center  justify-content-center ">
      <form onSubmit={handleSubmit} className=" shadow p-5">
        <PaymentElement />
        <button
          className="mt-3 bg-primary  text-white  border-0  rounded-1  w-100 py-2"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};
const CheckoutForm = () => {
  const location = useLocation();
  const clientSecret = location.state;

  if (!clientSecret) return <Navigate to={"/checkout"} />;
  return (
    <>
      <Elements
        options={{
          clientSecret: clientSecret,
        }}
        stripe={stripePromise}
      >
        <Checkout />
      </Elements>
    </>
  );
};

export default CheckoutForm;



