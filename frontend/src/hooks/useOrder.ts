const useOrder = () => {
  const sendOrder = async ({
    color,
    glass,
    pic,
    name,
    type,
    width,
    height,
    remarks,
  }: any) => {
    try {
      const res = await fetch("/api/order/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          color: color,
          glass: glass,
          pic: pic,
          name: name,
          type: type,
          width: width,
          height: height,
          remarks: remarks,
        }),
      });

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { sendOrder };
};

export default useOrder;
