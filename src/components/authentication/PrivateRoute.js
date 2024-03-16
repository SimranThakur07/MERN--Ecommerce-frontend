import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated, admin, admonOnly }) => {
  if (!isAuthenticated) return <Navigate to="/" />;

  if (admonOnly && !admin) return <Navigate to="/" />;
  
    return children ? children : <Outlet />;
  
};

export default PrivateRoute;
