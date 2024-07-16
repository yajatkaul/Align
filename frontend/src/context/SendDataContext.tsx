import { createContext, useContext, useState } from "react";

interface DataContextProps {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: DataContextProps = {
    data: 0,
    setData: () => {},
  };
  

export const DataContext = createContext<DataContextProps>(defaultValue);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<number>(0);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
