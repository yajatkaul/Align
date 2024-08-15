import { useEffect, useState } from "react";
import { useCustomerContext } from "../context/CustomerContext";
import { useDataContext } from "../context/SendDataContext";
import useOrder from "../hooks/useOrder";
import toast from "react-hot-toast";

interface ProductProps {
  name: string;
  type: string;
  pic: string;
}

const DetailCard = ({ name, type, pic }: ProductProps) => {
  const { sendOrder } = useOrder();
  const { data } = useDataContext();
  const { details } = useCustomerContext();

  const specialGlassName = ["Glass Bricks", "Cast Glass"];
  const others = ["Other", "Mirror", "Railing"];

  const [inputs, setInputs] = useState({
    color: "",
    glass: "",
    name: name,
    pic: pic,
    width: "",
    height: "",
    remarks: "",
  });

  const limiter = () => {
    if (parseInt(inputs.height) > 3600) {
      setInputs((prev) => ({ ...prev, height: "3600" }));
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs((prev) => ({ ...prev, color: e.target.value }));
  };

  const handleGlassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs((prev) => ({ ...prev, glass: e.target.value }));
  };

  const sendData = () => {
    if (type === "Wall Cladding") {
      if (!inputs.remarks) {
        return toast("Remarks required", {
          icon: "📝",
        });
      }
    } else {
      if (
        !inputs.glass &&
        !inputs.color &&
        !inputs.height &&
        !inputs.width &&
        !inputs.remarks
      ) {
        return;
      }
    }
    sendOrder({
      customerName: details?.customerName,
      companyName: details?.companyName,
      phoneNumber: details?.phoneNumber,
      location: details?.location,
      email: details?.email,
      type: details?.type,
      color: inputs.color,
      pic: inputs.pic,
      glass: inputs.glass,
      name: inputs.name,
      width: inputs.width,
      height: inputs.height,
      remarks: inputs.remarks,
    });
  };

  useEffect(() => {
    sendData();
  }, [data]);

  useEffect(() => {
    limiter();
  }, [inputs.height]);

  const renderColorOptions = () => {
    if (type === "Shower") {
      return (
        <>
          <option>Brush Gold</option>
          <option>Black Noir</option>
          <option>Nickel Brush</option>
          <option>Cocoa Brown</option>
        </>
      );
    }
    if (type === "Wardrobe") {
      return (
        <>
          <option>Cocoa Brown</option>
          <option>Brush Gold</option>
          <option>Black Noir</option>
        </>
      );
    }
    if (type === "Railing") {
      return (
        <>
          <option>Silver</option>
          <option>Senses Metallic</option>
          <option>Earth Metallic</option>
          <option>Saffron Wood</option>
        </>
      );
    }
    return (
      <>
        <option>Brush Gold</option>
        <option>Black Noir</option>
        <option>Nickel Brush</option>
        <option>Cocoa Brown</option>
        <option>Space Grey</option>
        <option>Champagne</option>
      </>
    );
  };

  const renderGlassOptions = () => {
    if (type === "Mirror" || specialGlassName.includes(name)) {
      if (type === "Mirror") {
        return (
          <>
            <option value="" disabled>
              Glass Shape
            </option>
            <option>Round</option>
            <option>Oval</option>
            <option>Square</option>
            <option>Rectangle</option>
            <option>Custom</option>
          </>
        );
      }
      if (name === "Cast Glass") {
        return (
          <>
            <option value="" disabled>
              Type
            </option>
            <option>Chain</option>
            <option>Linked</option>
          </>
        );
      }
      return (
        <>
          <option value="" disabled>
            Type
          </option>
          <option>Solid</option>
          <option>Hollow</option>
        </>
      );
    }
    return (
      <>
        <option value="" disabled>
          Glass
        </option>
        <option>Clear Glass</option>
        <option>Tinted Glass</option>
        <option>Figured Glass</option>
        <option>Metallic Mesh</option>
        <option>Fabric</option>
      </>
    );
  };

  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex md:min-w-[120px]">
        {type !== "Wall Cladding" && (
          <>
            <select
              className="select select-bordered w-full max-w-[120px]"
              onChange={handleColorChange}
              value={inputs.color}
              disabled={
                name === "Frameless Mirror" ||
                name === "Cast Glass" ||
                name === "Table Top"
              }
            >
              <option value="" disabled>
                Color
              </option>
              {renderColorOptions()}
            </select>
            {inputs.color && (
              <img
                src={`/api/uploads/${inputs.color}.png`}
                alt={inputs.color}
                className="rounded-[50%] w-[40px] h-[40px] mt-[4px]"
              />
            )}
          </>
        )}
      </div>
      {type !== "Wall Cladding" && (
        <select
          className="select select-bordered w-full max-w-[160px]"
          onChange={handleGlassChange}
          value={inputs.glass}
        >
          {renderGlassOptions()}
        </select>
      )}
      {!others.includes(type) && (
        <>
          <input
            type="number"
            placeholder="Width(mm)"
            value={inputs.width}
            min="1"
            max="3600"
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, width: e.target.value }))
            }
            className="input input-bordered w-full max-w-[150px] text-[14px]"
          />
          <input
            type="number"
            placeholder="Height(mm)"
            value={inputs.height}
            min="1"
            max="3600"
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, height: e.target.value }))
            }
            className="input input-bordered w-full max-w-[150px] text-[14px]"
          />
        </>
      )}
      <textarea
        placeholder={type === "Wall Cladding" ? "Remarks*" : "Remarks"}
        value={inputs.remarks}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, remarks: e.target.value }))
        }
        className="textarea textarea-bordered h-[47px] w-full max-w-[200px]"
      />
    </div>
  );
};

export default DetailCard;
