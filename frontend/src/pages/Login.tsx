// @ts-nocheck
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const { loading, handelLogin } = useLogin();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.email) {
      return toast.error("Fill all the fields!");
    }
    await handelLogin(inputs);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('/bg.jpg')]">
      <div className="hidden md:flex h-[600px] max-w-[700px]">
        <img
          src="/authpic.png"
          alt="Image"
          className="object-cover rounded-l-[30px]"
        />
      </div>
      <form onSubmit={handelSubmit}>
        <div className="flex max-w-[400px] md:w-[400px] justify-center px-4 py-16 bg-base-200 flex-col gap-[30px] h-[600px] md:rounded-r-[30px] rounded-[30px] md:rounded-l-none">
          <div className="flex justify-start items-start">
            <p className="text-[30px]">Log In</p>
          </div>
          <div className="flex flex-col h-full gap-[30px]">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </label>

            <a href="/signup" className="mt-[100px]">
              <div className="divider"></div>
              <p>Don't have an account?</p>
            </a>
            <div className="flex justify-center items-center ">
              <button className="btn btn-wide outline outline-1 text-[20px]">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
