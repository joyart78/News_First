import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const getUserFromLS = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLS() || null);

  const signin = (User, cb) => {
    setUser(User);
    localStorage.setItem("user", JSON.stringify(User));
    cb();
  };

  const value = { user, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
