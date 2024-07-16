import { useEffect, useState } from "react";
import useOrder from "../hooks/useOrder";
import { useDataContext } from "../context/SendDataContext";
import { useCustomerContext } from "../context/CustomerContext";

interface ProductProps {
  name: string;
  pic: string;
}

const Product = ({ pic, name }: ProductProps) => {
  const { sendOrder } = useOrder();
  const { data } = useDataContext();
  const { details } = useCustomerContext();

  const [inputs, setInputs] = useState({
    customerName: details?.customerName,
    companyName: details?.companyName,
    phoneNumber: details?.phoneNumber,
    color: details?.color,
    name: name,
    count: "",
    width: "",
    height: "",
  });

  const sendData = () => {
    if (!inputs.count || !inputs.width || !inputs.height) {
      return;
    } else {
      sendOrder({
        customerName: details?.customerName,
        companyName: details?.companyName,
        phoneNumber: details?.phoneNumber,
        color: details?.color,
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
    <div className="flex items-center">
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
