"use client";
import React, { PropsWithChildren, useState } from "react";
type IRowContext = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const RowContext = React.createContext<IRowContext>({
  data: {},
  setData: () => {},
});

export const useRowContext = () => {
  const context = React.useContext(RowContext);
  if (!context) {
    throw new Error("useRowContext must be used within a RowContext");
  }
  return context;
}

type Props = { defaultData: any };

export const RowProvider = (props: PropsWithChildren<Props>) => {
  const { defaultData, children } = props;
  const [data, setData] = useState<any>(defaultData)
  // console.log({data})

  const value: IRowContext = {
    data,
    setData
  }

  return (
    <RowContext.Provider value={value}>
      {children}
    </RowContext.Provider>
  )
};

export default RowProvider;
