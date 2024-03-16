import React, { useState } from "react";
import "../../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSignupApiMutation } from "../../redux/api/userApi";
import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase";
import { userExist } from "../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const [login] = useSignupApiMutation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const signupHandler = async (e) => {
   e.preventDefault()
   
    try {
  //   const provider = new GoogleAuthProvider()
  //  const {user }= await signInWithPopup(auth, provider)
   
        const res = await login({
          name: input.name,
          email: input.email,
          gender: input.gender,
          password: input.password,
          
        })
       if("data" in res){
        toast.success(res.data.message)
        navigate('/signin')
       
       }
       else{
        const error = res.error
        const message = error.data
        toast.error(message.message)
       }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page w-100 d-flex align-items-center justify-content-center px-lg-5  p-3 mt-5 ">
        <div className="login-card d-flex justify-content-center ">
          <div className="left-card p-lg-3 p-1 bg-primary text-white d-flex  flex-column align-items-center justify-content-center  ">
            <h3 className="text-center">Already have an account?</h3>
            <p className=" text-center  fs-6 mt-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              nostrum ipsa? In quisquam repellendus temporibus.
            </p>
            <Link to="/signin" className="rounded-5  py-2 px-4 create mt-3 ">
              Login Now
            </Link>
          </div>
          <div className="text-center p-lg-5 p-2   right-card">
            <h4 className="mb-5 fw-bolder ">CREATE AN ACCOUNT</h4>
            <form
              action=""
              method="post"
              className="w-100 p-lg-3 p-sm-1 "
              onSubmit={signupHandler}
            >
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50  "
                  value={input.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50  "
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <select
                  name="gender"
                  id="gender"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50   text-dark-emphasis "
                  value={input.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50 "
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmpassword"
                  name="confirmpassword"
                  className="w-100 py-1 ps-2 border-0  border-bottom  border-2 border-black-50 "
                  value={input.confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="w-100 border-0  btn btn-danger py-2 text-uppercase  mb-2"
                  type="submit"
                >
                  Register
                </button>
                {/* <button
                className="border-0 bg-white rounded-1 mt-3 shadow p-2"
                type="submit"
              >
                {" "}
                <FcGoogle /> Signup with Google
              </button> */}
              </div>
            </form>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
