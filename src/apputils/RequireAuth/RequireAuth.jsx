import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  let auth = localStorage.getItem("sp_auth");

  if (auth !== "authenticated") {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
