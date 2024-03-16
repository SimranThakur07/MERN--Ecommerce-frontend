import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/Product.css'
import React, { Suspense } from 'react';
import Loader from './components/cards/Loader';
import PrivateRoute from './components/authentication/PrivateRoute';
import Search from './pages/Search';
import { Toaster } from "react-hot-toast"
import { useSelector } from 'react-redux';
const Home = React.lazy(() => import('./pages/Home')) ;
const Category = React.lazy(() => import('./pages/Category')) ;
const ProductDetails =  React.lazy(() => import( './pages/ProductDetails'));
const Cart =  React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout')) ;
const Confirmation = React.lazy(() => import('./pages/Confirmation')) ;
const Signin = React.lazy(() => import('./components/authentication/Signin')) ;
const Signup = React.lazy(() => import('./components/authentication/Signup')) ;
const Payment = React.lazy(() => import('./pages/Payment')) ;
const Wishlist = React.lazy(() => import('./pages/Wishlist')) ;
const Order = React.lazy(() => import('./pages/Order')) ;
const OrderDetails = React.lazy(() => import('./pages/OrderDetails')) ;
const Dashboard = React.lazy(() => import('./admin/view/Dashboard')) ;
const AdminCategory = React.lazy(() => import('./admin/view/AdminCategory')) ;
const AdminProduct = React.lazy(() => import('./admin/view/AdminProduct')) ;
const AdminWishlist = React.lazy(() => import('./admin/view/AdminWishlist')) ;
const AdminCart = React.lazy(() => import('./admin/view/AdminCart')) ;
const Client = React.lazy(() => import('./admin/view/Client')) ;
const AddProduct = React.lazy(() => import('./admin/view/AddProduct')) ;
const AdminProductDetails = React.lazy(() => import('./admin/view/AdminProductDetails')) ;
const ManageProduct = React.lazy(() => import('./admin/view/ManageProduct')) ;
const CheckoutForm = React.lazy(() => import('./pages/CheckoutForm')) ;
function App() {                  
  const isAuthenticated = useSelector((state) => state.userReducer.user)
  const userData = JSON.parse(localStorage.getItem("userData"))
  const role = userData?.user?.role
  
  return (
   <>
   <BrowserRouter>
    <Suspense fallback={<Loader/>}>
   <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/product-category" element={<Category/>} />
    <Route path="/product/:id" element={<ProductDetails/>} />
    <Route path="/signin" element={ 
      <PrivateRoute isAuthenticated={isAuthenticated ? false : true}>
        <Signin/>
      </PrivateRoute>
     } />

    <Route path="/signup" element={<Signup/>} />
    <Route path="/search" element={<Search/>} />
   <Route element={<PrivateRoute  isAuthenticated={isAuthenticated ? true : false}/>}>
   <Route path="/cart" element={<Cart/>} />
    <Route path="/wishlist" element={<Wishlist/>} />
    <Route path="/order" element={<Order/>} />
    <Route path="/order-detail" element={<OrderDetails/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/pay" element={<CheckoutForm/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/confirmation" element={<Confirmation/>} />
   </Route>
   {/* ---------------Admin Routes------------ */}
   <Route element={<PrivateRoute isAuthenticated={true} admonOnly={true} admin={role === "admin" ? true : false} />}>
   <Route path="/admin/dashboard" element={<Dashboard/>} />
   <Route path="/admin/category" element={<AdminCategory/>} />
   <Route path="/admin/product" element={<AdminProduct/>} />
   <Route path="/admin/product/:id" element={<AdminProductDetails/>} />
   <Route path="/admin/wishlist" element={<AdminWishlist/>} />
   <Route path="/admin/cart" element={<AdminCart/>} />
   <Route path="/admin/cart/:id" element={<ManageProduct/>} />
   <Route path="/admin/client" element={<Client/>} />
   <Route path="/admin/addproduct" element={<AddProduct/>} />
   </Route>
   </Routes>
    </Suspense>

    <Toaster position="top-right"  />
   </BrowserRouter>
   
   </>
  );
}

export default App;
