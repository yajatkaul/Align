// @ts-nocheck
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import toast from "react-hot-toast";
import useSignup from "../hooks/useSignup";

const Choose = () => {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const { handelLogin } = useLogin();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.email) {
      return toast.error("Fill all the fields!");
    }
    await handelLogin(inputs);
  };

  const [inputs2, setInputs2] = useState({
    email: "",
    phoneNumber: "",
    location: "",
    type: "",
  });
  const { loading, handelSingup } = useSignup();

  const handelSubmit2 = async (e) => {
    e.preventDefault();
    await handelSingup(inputs2);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('/bg.jpg')] bg-cover">
      <div className="hidden md:flex h-[700px] max-w-[700px]">
        <img
          src="/authpic.png"
          alt="Image"
          className="object-cover rounded-l-[30px]"
        />
      </div>

      <div className="flex max-w-[400px] md:w-[400px] h-[700px] justify-center px-4 py-16 bg-base-200 flex-col gap-[30px] h-[600px] md:rounded-r-[30px] rounded-[30px] md:rounded-l-none bg-[#e0dad3]">
        <form onSubmit={handelSubmit}>
          <div className="">
            <div className="flex flex-col justify-center items-center"></div>
            <div className="flex justify-start items-start">
              <p className="text-[30px] font-bold">Welcome Back!</p>
            </div>
            <div className="flex flex-col h-full">
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

              <div>
                <div className="divider"></div>
              </div>
              <div className="flex justify-center items-center ">
                <button className="btn w-full text-[20px]">Login</button>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={handelSubmit2}>
          <div className="divider m-0"></div>
          <p className="text-[30px] font-bold">Enter your details!</p>
          <div className="flex flex-col gap-4">
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
                value={inputs2.email}
                onChange={(e) =>
                  setInputs2({ ...inputs2, email: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 891.024 891.024"
                xml:space="preserve"
                className="h-4 w-4 opacity-60"
              >
                <g>
                  <path
                    d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
		l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
		c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
		l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
		C1,142.575-3.5,162.675,2.8,180.875z"
                  />
                </g>
              </svg>
              <input
                type="number"
                className="grow"
                placeholder="Phone Number"
                value={inputs2.phoneNumber}
                onChange={(e) =>
                  setInputs2({ ...inputs2, phoneNumber: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 395.71 395.71"
                xml:space="preserve"
                className="h-4 w-4 opacity-60"
              >
                <g>
                  <path
                    d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                  />
                </g>
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Location"
                value={inputs2.location}
                onChange={(e) =>
                  setInputs2({ ...inputs2, location: e.target.value })
                }
              />
            </label>
            <select
              className="select select-bordered w-full"
              onChange={(e) => setInputs2({ ...inputs2, type: e.target.value })}
            >
              <option disabled selected>
                Type
              </option>
              <option>Interior Designer</option>
              <option>Individual Owner/Consumer</option>
              <option>Architect</option>
              <option>PMC</option>
              <option>Vendor</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <div className="divider"></div>
            <button className="btn text-[20px] flex justify-center items-center w-full">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Choose;
