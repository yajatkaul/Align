// @ts-nocheck
import { convertToIST } from "../utils/timeCvt";

const OrderCard = ({
  companyName,
  email,
  location,
  time,
  phoneNumber,
  data,
}) => {
  const formattedTime = convertToIST(time);
  console.log(data);
  return (
    <div>
      <p className="text-[30px]">Company: {companyName}</p>
      <div>
        <p className="text-[20px]">Details-</p>
        <div>Email: {email}</div>
        <p>Location: {location}</p>
        <p>Time: {formattedTime}</p>
        <p>Contact: +91 {phoneNumber}</p>
        <p>Order</p>
        <div className="flex gap-8 flex-col">
          {data.items.map((item) => {
            return (
              <>
                <div className="flex">
                  <div className="flex flex-col justify-center items-center">
                    <img src={item.pic} className="max-w-[200px]" />
                    <div>{item.name}</div>
                  </div>
                  <div className="flex md:flex-row flex-col">
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
                          value={`${item.color}mm`}
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
                        value={`${item.glass}mm`}
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
