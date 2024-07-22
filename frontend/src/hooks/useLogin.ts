// @ts-nocheck
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const handelLogin = async ({ email }) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://align-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }

      localStorage.setItem("Align", JSON.stringify(data));

      setAuthUser(data);

      toast.success("Logged In");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handelLogin };
};

export default useLogin;
