// @ts-nocheck
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const handelSingup = async ({
    userName,
    email,
    phoneNumber,
    location,
    type,
  }) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://align-backend.onrender.com/api/auth/signup",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName,
            email,
            phoneNumber,
            location,
            type,
          }),
        }
      );

      const data = await res.json();
      if (data.message) {
        throw new Error(data.message);
      }

      localStorage.setItem("social-hub", JSON.stringify(data));

      setAuthUser(data);

      toast.success("Singed Up");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handelSingup };
};

export default useSignup;
