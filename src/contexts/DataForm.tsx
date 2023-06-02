"use client";
import React, { useState } from "react";

type DataContextProps = {
  form: any;
  setForm: React.SetStateAction<any>;
};

export const DataContext = React.createContext<DataContextProps>({
  form: {},
  setForm: () => {},
});

export const useFormContext = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a DataForm");
  }
  return context;
};

type Props = {
  children: any;
};

const DataForm = (props: Props) => {
  const [form, setForm] = useState<any>({});

  const value: DataContextProps = {
    form,
    setForm,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataForm;
