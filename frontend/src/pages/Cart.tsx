// @ts-nocheck
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Item from "../components/Item";
import useGetCart from "../hooks/useGetCart";
import useSendOrder from "../hooks/useSendOrder";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Cart = () => {
  const { cart } = useGetCart();
  const { order } = useSendOrder();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    companyName: "",
    phoneNumber: "",
    location: "",
    type: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await order(details);
    toast.success("Ordered Successfully");

    navigate("/");
  };

  console.log(cart?.items);
  if (cart?.items.length === 0) {
    console.log("empty");
  }
  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
        <Header />
        <div className="flex flex-1 mt-[100px] flex-wrap">
          {cart?.items?.map((item) => {
            return (
              <Item
                id={item._id}
                name={item.name}
                pic={item.pic}
                type={item.type}
                width={item.width}
                height={item.height}
                color={item.color}
                glass={item.glass}
              />
            );
          })}
          {cart?.items.length === 0 ? (
            <p className="text-[30px] flex flex-col justify-center items-center w-full">
              Cart is empty
              <Link to="/">
                <IoHome className="w-[40px] h-[40px] cursor-pointer" />
              </Link>
            </p>
          ) : (
            <>
              <button
                className="btn btn-wide w-full"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Order
              </button>
            </>
          )}

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Confirm Order</h3>
              <form onSubmit={submit} className="flex flex-col gap-8">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered w-full max-w-xs"
                  value={details.companyName}
                  onChange={(e) =>
                    setDetails({ ...details, companyName: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  value={details.phoneNumber}
                  onChange={(e) =>
                    setDetails({ ...details, phoneNumber: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered w-full max-w-xs"
                  value={details.location}
                  onChange={(e) =>
                    setDetails({ ...details, location: e.target.value })
                  }
                />
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setDetails({ ...details, type: e.target.value })
                  }
                >
                  <option disabled selected>
                    Type
                  </option>
                  <option>Builder</option>
                  <option>Greedo</option>
                </select>
                <button className="btn btn-wide w-full">Place Order</button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;