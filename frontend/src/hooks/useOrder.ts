const useOrder = () => {
  const sendOrder = async ({ color, glass, pic, name, width, height }: any) => {
    try {
      const res = await fetch("https://align-backend.onrender.com/api/order/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          color: color,
          glass: glass,
          pic: pic,
          name: name,
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
