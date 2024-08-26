// @ts-nocheck
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useSendOrder = () => {
  const order = async ({ phoneNumber, type, companyName, location }) => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          type,
          companyName,
          location,
        }),
      });

      if (response.err) {
        throw new Error(response.err);
      }

      const data = await response.json();
      toast.success(data.result);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { order };
};

export default useSendOrder;
