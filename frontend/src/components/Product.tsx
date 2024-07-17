import { useEffect, useState } from "react";
import useOrder from "../hooks/useOrder";
import { useDataContext } from "../context/SendDataContext";
import { useCustomerContext } from "../context/CustomerContext";

interface ProductProps {
  name: string;
  pic: string;
  type: string;
}

const Product = ({ pic, name, type }: ProductProps) => {
  const { sendOrder } = useOrder();
  const { data } = useDataContext();
  const { details } = useCustomerContext();

  const [inputs, setInputs] = useState({
    color: "",
    name: name,
    count: "",
    width: "",
    height: "",
  });

  const handleColorChange = (e: any) => {
    setInputs({ ...inputs, color: e.target.value });
  };

  const sendData = () => {
    if (!inputs.count || !inputs.width || !inputs.height || !inputs?.color) {
      return;
    } else {
      sendOrder({
        customerName: details?.customerName,
        companyName: details?.companyName,
        phoneNumber: details?.phoneNumber,
        location: details?.location,
        email: details?.email,
        type: details?.type,
        color: inputs.color,
        name: inputs.name,
        count: inputs.count,
        width: inputs.width,
        height: inputs.height,
      });
    }
  };

  useEffect(() => {
    sendData();
  }, [data]);

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="flex flex-col items-center mt-[30px]">
        <div className="w-[300px] h-[200px] overflow-hidden">
          <img
            src={pic}
            alt="image"
            className="w-full h-full object-scale-down"
          />
        </div>
        <a>{name}</a>
        <input
          type="number"
          placeholder="Count"
          value={inputs.count}
          min="1"
          onChange={(e) => setInputs({ ...inputs, count: e.target.value })}
          className="input input-bordered w-full max-w-[250px]"
        />
        <div className="flex gap-3 mt-[5px]">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleColorChange}
          >
            <option disabled selected>
              Color
            </option>
            <option>Brush Gold</option>
            <option>Black Noir </option>
            <option>Nickel Brush</option>
            <option>Cocoa Brown</option>
            <option>Space Grey</option>
            <option>Champagne</option>
          </select>
          {inputs.color ? (
            <img
              src={`${inputs.color}.png`}
              className="rounded-[50%] w-[40px] h-[40px] mt-[4px]"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center ml-[10px]">
        <label>Opening Size</label>
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Width"
            value={inputs.width}
            min="1"
            onChange={(e) => setInputs({ ...inputs, width: e.target.value })}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Height"
            value={inputs.height}
            min="1"
            onChange={(e) => setInputs({ ...inputs, height: e.target.value })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
