// @ts-nocheck
import { CiTrash } from "react-icons/ci";
import useRemoveCart from "../hooks/useRemoveCart";

interface ItemProps {
  name: string;
  pic: string;
  type: string;
  id: string;
  glass: string;
  height: string;
  width: string;
  color: string;
}

const Item = ({
  id,
  name,
  pic,
  type,
  glass,
  height,
  width,
  color,
}: ItemProps) => {
  const removeCartItem = useRemoveCart();

  const deleteItem = async (id) => {
    await removeCartItem(id);
    window.location.reload();
  };
  return (
    <>
      <div className="flex items-center gap-2 m-[10px] md:flex-row">
        <div className="flex flex-col items-center">
          <img src={pic} className="w-[250px] h-full object-scale-down" />
          <p>{name}</p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col">
            <label>Width</label>
            <input
              type="text"
              placeholder="You can't touch this"
              className="input input-bordered w-full max-w-xs"
              value={`${width}mm`}
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label>Height</label>
            <input
              type="text"
              placeholder="You can't touch this"
              className="input input-bordered w-full max-w-xs"
              value={`${height}mm`}
              disabled
            />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label>Color</label>
              <input
                type="text"
                placeholder="You can't touch this"
                className="input input-bordered w-full max-w-xs"
                value={color}
                disabled
              />
            </div>
            <img
              src={`${color}.png`}
              className="rounded-[50%] w-[40px] h-[40px] mt-[29px]"
            />
          </div>
          <div className="flex flex-col">
            <label>Glass</label>
            <input
              type="text"
              placeholder="You can't touch this"
              className="input input-bordered w-full max-w-xs"
              value={glass}
              disabled
            />
          </div>
          <CiTrash
            onClick={() => {
              deleteItem({ id });
            }}
            className="h-[40px] w-[40px] mt-[29px] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Item;
