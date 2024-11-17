import { AuthContext } from "../hoc/AuthProvider.jsx";
import { useContext } from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
