import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = () => {
  const [user, setUser] = useState({
    name: "hablu mia",
    email: "hablu@mia.com",
  });
  const authData = {
    user,
    setUser,
  };
  return <AuthContext value={authData}></AuthContext>;
};

export default AuthProvider;
