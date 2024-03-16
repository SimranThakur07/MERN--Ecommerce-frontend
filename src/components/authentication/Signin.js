import React, { useState } from "react";
import "../../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
// import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useLoginApiMutation } from "../../redux/api/loginApi";
import { useDispatch } from "react-redux";
import { userExist } from "../../redux/reducer/userReducer";
const Signin = () => {
  const [login] = useLoginApiMutation();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email: input.email,
        password: input.password,
      });
      if ("data" in res) {
        toast.success(res.data.message);
        dispatch(userExist(res?.data))
        localStorage.setItem("userData", JSON.stringify(res?.data))
        navigate('/')
      } else {
        const error = res.error;
        const message = error.data;
        toast.error(message.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <Navbar />
      <div className="login-page w-100 d-flex align-items-center justify-content-center px-lg-5  p-3 mt-5 ">
        <div className="login-card d-flex justify-content-center ">
          <div className="left-card  p-lg-3 p-1 bg-primary text-white d-flex  flex-column align-items-center justify-content-center  ">
            <h3>New to our website?</h3>
            <p className=" text-center  fs-6 mt-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              nostrum ipsa? In quisquam repellendus temporibus.
            </p>
            <Link to="/signup" className="rounded-5  py-2 px-4 create mt-3 ">
              Create An Account
            </Link>
          </div>
          <div className="text-center p-lg-5 p-2 right-card">
            <h4 className="mb-5 fw-bolder ">Login</h4>
            <form
              method="post"
              className="w-100 p-lg-3 p-sm-1 "
              onSubmit={loginHandler}
            >
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50  "
                  onChange={handleChange}
                  value={input.email}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50 "
                  onChange={handleChange}
                  value={input.password}
                />
              </div>
              <div className="mb-4 text-lg-start ">
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> Remember me
                </label>
              </div>
              <div>
                <button className="w-100 border-0  btn btn-primary  rounded-5 py-2 ">
                  Login
                </button>
              </div>
              {/* <button
                className="border-0 bg-white rounded-1 mt-3 shadow p-2"
                type="submit"
              >
                {" "}
                <FcGoogle /> Login with Google
              </button> */}
              <div className="mt-3">
                <Link>Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
