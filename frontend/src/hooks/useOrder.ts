const useOrder = () => {
  const sendOrder = async ({
    customerName,
    companyName,
    phoneNumber,
    email,
    location,
    type,
    color,
    name,
    count,
    width,
    height,
  }: any) => {
    try {
      const res = await fetch("/api/order/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName,
          companyName: companyName,
          phoneNumber: phoneNumber,
          email: email,
          location: location,
          type: type,
          color: color,
          name: name,
          count: count,
          width: width,
          height: height,
        }),
      });

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return { sendOrder };
};

export default useOrder;
