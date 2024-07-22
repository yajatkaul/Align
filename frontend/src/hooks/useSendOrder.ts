// @ts-nocheck
import { useState, useEffect } from "react";

const useSendOrder = () => {
  const order = async ({ phoneNumber, type, companyName, location }) => {
    try {
      const response = await fetch("https://align-backend.onrender.com/api/order", {
        method: "POST",
        credentials: "include",
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
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { order };
};

export default useSendOrder;
