import { useEffect, useState } from "react";
import { useCustomerContext } from "../context/CustomerContext";
import { useDataContext } from "../context/SendDataContext";
import useOrder from "../hooks/useOrder";

interface ProductProps {
  name: string;
  type: string;
}

const DetailCard = ({ name, type }: ProductProps) => {
  const { sendOrder } = useOrder();
  const { data } = useDataContext();
  const { details } = useCustomerContext();

  const [inputs, setInputs] = useState({
    color: "",
    glass: "",
    name: name,
    width: "",
    height: "",
  });

  const limiter = () => {
    if (parseInt(inputs.width) > 3600) {
      setInputs({ ...inputs, width: "3600" });
    }
    if (parseInt(inputs.height) > 3600) {
      setInputs({ ...inputs, height: "3600" });
    }
  };

  const handleColorChange = (e: any) => {
    setInputs({ ...inputs, color: e.target.value });
  };

  const handleGlassChange = (e: any) => {
    setInputs({ ...inputs, glass: e.target.value });
  };

  const sendData = () => {
    if (!inputs.width || !inputs.height || !inputs?.color || !inputs.glass) {
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
        glass: inputs.glass,
        name: inputs.name,
        width: inputs.width,
        height: inputs.height,
      });
    }
  };

  useEffect(() => {
    sendData();
  }, [data]);

  useEffect(() => {
    limiter();
  }, [inputs]);

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="flex md:min-w-[200px]">
          <select
            className="select select-bordered w-full max-w-[200xpx]"
            onChange={handleColorChange}
          >
            <option disabled selected>
              Color
            </option>
            {type === "Shower" && (
              <>
                <option>Brush Gold</option>
                <option>Black Noir </option>
                <option>Nickel Brush</option>
                <option>Cocoa Brown</option>
              </>
            )}
            {type !== "Shower" && (
              <>
                <option>Brush Gold</option>
                <option>Black Noir </option>
                <option>Nickel Brush</option>
                <option>Cocoa Brown</option>
                <option>Space Grey</option>
                <option>Champagne</option>
              </>
            )}
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
        <select
          className="select select-bordered w-full max-w-[200xpx]"
          onChange={handleGlassChange}
        >
          <option disabled selected>
            Glass
          </option>
          <option>Brush Gold</option>
          <option>Black Noir </option>
          <option>Nickel Brush</option>
          <option>Cocoa Brown</option>
          <option>Space Grey</option>
          <option>Champagne</option>
        </select>
        <input
          type="number"
          placeholder="Width"
          value={inputs.width}
          min="1"
          max="3600"
          onChange={(e) => setInputs({ ...inputs, width: e.target.value })}
          className="input input-bordered w-full max-w-[150px]"
        />
        <input
          type="number"
          placeholder="Height"
          value={inputs.height}
          min="1"
          max="3600"
          onChange={(e) => setInputs({ ...inputs, height: e.target.value })}
          className="input input-bordered w-full max-w-[150px]"
        />
      </div>
    </>
  );
};

export default DetailCard;
