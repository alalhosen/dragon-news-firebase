import React, { use } from "react";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);
  // if -> amader user thake tahole return korbo children ke
  return children;
  //   if amader user na thake, tahole navigate kore dibo login e
};

export default PrivateRoute;
