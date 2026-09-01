import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);

  if (user && user?.email) {
    return children;
  }
  return<Navigate to="/auth/login"></Navigate>
  // if -> amader user thake tahole return korbo children ke
  // return children;
  //   if amader user na thake, tahole navigate kore dibo login e
};

export default PrivateRoute;
