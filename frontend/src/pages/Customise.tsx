// @ts-nocheck
import { CiShoppingCart } from "react-icons/ci";
import Header from "../components/Header";
import Product from "../components/Product";
import { useDataContext } from "../context/SendDataContext";
import { useCustomerContext } from "../context/CustomerContext";
import Footer from "../components/Footer";
import useGetProducts from "../hooks/useGetProducts";

const Customise = () => {
  const showModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal?.showModal();
  };
  const { details, setDetails } = useCustomerContext();
  const { data, setData } = useDataContext();

  const { products } = useGetProducts();

  const handleColorChange = (event: any) => {
    setDetails({ ...details, color: event.target.value });
  };

  const submit = () => {
    setData(data + 1);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
        <Header />

        <div className="flex flex-1 mt-[100px] flex-wrap gap-8 justify-center pl-[20px] pr-[20px] mb-[20px]">
          {products?.map((product) => {
            return <Product name={product.name} pic={product.image} />;
          })}
        </div>

        <div className="flex justify-center">
          <button
            className="btn fixed bottom-[20px] right-[20px] text-[20px] border-[#00000044] bg-[#ffffff]"
            onClick={showModal}
          >
            <div className="flex items-center">
              <CiShoppingCart className="h-[40px] w-[40px]" />
              <p className="text-[20px]">CheckOut</p>
            </div>
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Checkout</h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={details?.customerName}
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      customerName: e.target.value,
                    })
                  }
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={details?.companyName}
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      companyName: e.target.value,
                    })
                  }
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  placeholder="Phone number"
                  value={details?.phoneNumber}
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="flex gap-3">
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={handleColorChange}
                  >
                    <option disabled selected>
                      Profile Finish
                    </option>
                    <option>Brush Gold</option>
                    <option>Black Noir</option>
                    <option>Nickel Brush</option>
                    <option>Cocoa Brown</option>
                    <option>Space Grey</option>
                    <option>Champagne</option>
                  </select>
                  <img
                    src={`${details.color}.png`}
                    alt="Color"
                    className={`w-[50px] h-[50px] rounded-[50%] ${
                      details.color ? "inline" : "hidden"
                    }`}
                  />
                </div>
              </div>

              <button
                onClick={submit}
                className="btn btn-wide mt-[20px] w-full"
              >
                Place Order
              </button>
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

export default Customise;
