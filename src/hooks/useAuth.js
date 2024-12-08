import { AuthContext } from "../providers/AuthProvider.jsx";
import { useContext } from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
