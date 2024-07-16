import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataProp {
  customerName: string;
  companyName: string;
  phoneNumber: string; // Assuming phoneNumber is a string based on your interface
  color: string;
}

interface ContextType {
  details: DataProp;
  setDetails: React.Dispatch<React.SetStateAction<DataProp>>;
}

const initialContext: ContextType = {
  details: {
    customerName: "",
    companyName: "",
    phoneNumber: "",
    color: "",
  },
  setDetails: () => {}, // Placeholder function
};

export const CustomerContext = createContext<ContextType>(initialContext);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error(
      "useCustomerContext must be used within a DataContextProvider"
    );
  }
  return context;
};

export const CustomerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [details, setDetails] = useState<DataProp>({
    customerName: "",
    companyName: "",
    phoneNumber: "",
    color: "",
  });
  return (
    <CustomerContext.Provider value={{ details, setDetails }}>
      {children}
    </CustomerContext.Provider>
  );
};
