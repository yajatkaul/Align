// @ts-nocheck
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("https://align-backend.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }
      localStorage.removeItem("Align");

      setAuthUser(null);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return { logout };
};
export default useLogout;
