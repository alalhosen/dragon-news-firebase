import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
  // if -> amader user thake tahole return korbo children ke
  // return children;
  //   if amader user na thake, tahole navigate kore dibo login e
};

export default PrivateRoute;
