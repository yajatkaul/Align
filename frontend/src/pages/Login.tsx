// @ts-nocheck
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });
  const { loading, handelLogin } = useLogin();

  const handelSubmit = async (e) => {
    e.preventDefault();
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
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={inputs.userName}
                onChange={(e) =>
                  setInputs({ ...inputs, userName: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
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
