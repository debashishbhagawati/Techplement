import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
