// @ts-nocheck
import { convertToIST } from "../utils/timeCvt";

const OrderCard = ({
  companyName,
  email,
  location,
  time,
  phoneNumber,
  data,
  type,
}) => {
  const formattedTime = convertToIST(time);
  console.log(data);
  return (
    <div className="ml-[20px] mb-[20px]">
      <p className="text-[30px]">
        <div className="flex items-center justify-center">
          <p className="font-bold">Order Details</p>
          <p>{companyName}</p>
        </div>
      </p>
      <div>
        <p className="text-[20px] font-bold">Details-</p>
        <div className="flex items-center mb-[20px]">
          <p className="text-[20px]">Email:</p>
          <label className="input input-bordered flex items-center gap-2 ml-[40px]">
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
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              disabled
            />
          </label>
        </div>

        <div className="flex items-center mb-[20px]">
          <p className="text-[20px]">Type:</p>
          <label className="input input-bordered flex items-center gap-2 ml-[45px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              className="h-5 w-5 opacity-20"
            >
              <path d="M 25.90625 3.28125 C 16.566406 3.492188 15.507813 10.316406 17.5 18.1875 C 17.1875 18.398438 16.550781 19.148438 16.65625 20.40625 C 16.96875 22.714844 17.914063 23.34375 18.4375 23.34375 C 18.648438 24.917969 19.390625 26.574219 20.125 27.625 C 20.648438 28.359375 20.84375 29.304688 20.84375 30.25 C 20.84375 31.089844 20.855469 30.554688 20.75 31.5 C 20.644531 31.804688 20.496094 32.082031 20.3125 32.34375 C 20.527344 33.152344 21.765625 37 26 37 C 30.335938 37 31.5 32.847656 31.625 32.34375 C 31.429688 32.085938 31.273438 31.804688 31.15625 31.5 C 31.050781 30.347656 31.03125 30.882813 31.03125 29.9375 C 31.03125 29.097656 31.359375 28.378906 31.78125 27.75 C 32.515625 26.699219 33.226563 24.917969 33.4375 23.34375 C 34.070313 23.34375 35.007813 22.714844 35.21875 20.40625 C 35.324219 19.148438 34.828125 18.398438 34.40625 18.1875 C 35.457031 15.25 37.433594 6.132813 30.71875 5.1875 C 29.984375 3.929688 28.214844 3.28125 25.90625 3.28125 Z M 33.28125 33.75 C 32.441406 35.984375 30.21875 39 26 39 C 21.777344 39 19.5625 36.039063 18.6875 33.78125 C 14.53125 36.339844 6.0625 37.125 6.0625 46 L 45.9375 46 C 45.9375 36.898438 37.507813 36.273438 33.28125 33.75 Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={type}
              disabled
            />
          </label>
        </div>
        <div className="flex items-center mb-[20px]">
          <p className="text-[20px]">Location:</p>
          <label className="input input-bordered flex items-center gap-2 ml-[12px]">
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
              className="h-4 w-4 opacity-20"
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
              placeholder="Email"
              value={location}
              disabled
            />
          </label>
        </div>
        <div className="flex items-center mb-[20px]">
          <p className="text-[20px]">Time:</p>
          <label className="input input-bordered flex items-center gap-2 ml-[44px]">
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 86.285 86.285"
              xml:space="preserve"
              className="h-4 w-4 opacity-20"
            >
              <g>
                <path
                  d="M9.83,40.531c0-10.4,4.728-20.016,12.969-26.381c1.577-1.218,1.868-3.484,0.65-5.062c-1.219-1.577-3.484-1.87-5.063-0.65
		C8.362,16.181,2.613,27.878,2.613,40.531c0,4.96,0.885,9.803,2.631,14.396c0.548,1.441,1.919,2.327,3.374,2.327
		c0.426,0,0.859-0.076,1.281-0.236c1.863-0.708,2.799-2.792,2.091-4.655C10.557,48.592,9.83,44.611,9.83,40.531z"
                />
                <path
                  d="M43.143,0c-4.357,0-8.644,0.689-12.743,2.046c-1.893,0.626-2.918,2.668-2.292,4.56c0.626,1.892,2.668,2.916,4.56,2.292
		c3.367-1.115,6.892-1.68,10.476-1.68c18.368,0,33.312,14.944,33.312,33.313c0,18.37-14.944,33.316-33.312,33.316
		c-4.274,0-8.415-0.816-12.288-2.357l4.341-0.578c1.976-0.264,3.364-2.078,3.101-4.054c-0.264-1.977-2.091-3.36-4.054-3.101
		l-13.864,1.848c-1.976,0.264-3.364,2.078-3.101,4.054c0.024,0.179,0.07,0.348,0.118,0.517c0.015,0.537,0.139,1.077,0.402,1.578
		l6.624,12.601c0.646,1.229,1.899,1.931,3.197,1.931c0.566,0,1.141-0.134,1.676-0.415c1.765-0.928,2.443-3.109,1.516-4.873
		L29.64,78.77c4.29,1.516,8.836,2.295,13.503,2.295c22.348,0,40.529-18.183,40.529-40.533C83.672,18.182,65.49,0,43.143,0z"
                />
                <path
                  d="M41.477,36.553c0-3.083-2.577-5.129-5.811-5.129c-2.325,0-4.195,0.581-5.61,1.288c-0.379,0.202-0.556,0.506-0.556,0.936
		c0,0.556,0.404,0.984,0.96,0.984c0.202,0,0.43-0.101,0.48-0.126c1.137-0.505,2.603-0.909,4.321-0.909
		c2.931,0,3.992,1.339,3.992,3.133c0,4.119-10.107,5.938-10.107,11.27c0,0.784,0.556,1.314,1.339,1.314h9.754
		c0.606,0,1.087-0.455,1.087-1.062c0-0.606-0.48-1.086-1.087-1.086h-8.794C32.81,44.209,41.477,41.758,41.477,36.553z"
                />
                <path
                  d="M54.31,49.439c0.632,0,1.162-0.505,1.162-1.137v-3.437h1.921c0.581,0,1.035-0.43,1.035-1.011
		c0-0.581-0.454-1.036-1.035-1.036h-1.921v-9.805c0-0.809-0.581-1.465-1.466-1.465h-0.505c-0.506,0-0.985,0.252-1.264,0.607
		l-7.935,10.133C44.126,42.517,44,42.87,44,43.198v0.228c0,0.809,0.657,1.44,1.466,1.44h7.706v3.437
		C53.172,48.935,53.678,49.439,54.31,49.439z M46.451,42.819l6.721-8.667v8.667H46.451z"
                />
                <path
                  d="M28.158,24.259c3.995-3.487,9.119-5.407,14.429-5.407c12.105,0,21.953,9.85,21.953,21.956c0,0.996,0.809,1.805,1.805,1.805
		c0.996,0,1.805-0.809,1.805-1.805c0-14.096-11.468-25.564-25.563-25.564c-6.183,0-12.149,2.236-16.802,6.297
		c-0.751,0.655-0.828,1.795-0.173,2.546C26.268,24.836,27.408,24.914,28.158,24.259z"
                />
              </g>
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={formattedTime}
              disabled
            />
          </label>
        </div>

        <div className="flex items-center mb-[20px]">
          <p className="text-[20px]">Contact:</p>
          <label className="input input-bordered flex items-center gap-2 ml-[19px]">
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
              className="h-4 w-4 opacity-20"
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
              type="text"
              className="grow"
              placeholder="Email"
              value={`+91 ${phoneNumber}`}
              disabled
            />
          </label>
        </div>
        <p className="text-[40px] font-bold">Order</p>
        <div className="flex gap-8 flex-col">
          {data.items.map((item) => {
            return (
              <>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center items-center">
                    <img src={item.pic} className="max-w-[200px]" />
                    <div>{item.name}</div>
                  </div>
                  <div className="flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col">
                      <label>Width</label>
                      <input
                        type="text"
                        value={`${item.width}mm`}
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Height</label>
                      <input
                        type="text"
                        value={`${item.height}mm`}
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Color</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={`${item.color}`}
                          className="input input-bordered w-full max-w-xs"
                          disabled
                        />
                        <img
                          src={`${item.color}.png`}
                          className="w-[40px] h-[40px] rounded-[100%]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label>Glass</label>
                      <input
                        type="text"
                        value={`${item.glass}`}
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Remarks</label>
                      <textarea
                        className="textarea textarea-bordered"
                        value={item.remarks}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
