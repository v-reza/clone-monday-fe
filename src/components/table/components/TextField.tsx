import React from "react";
import { IPublicFieldProps } from "../types/field.type";
import { useTableContext } from "../context";
import { useRowContext } from "../Row";

type TextFieldProps = IPublicFieldProps & {}

const TextField = (props: TextFieldProps) => {
  const { source, label } = props;
  const { data, setData } = useRowContext()
  console.log({data})
  const {} = useTableContext()

  return (
    <>
      <span className="text-[#D6D8DF] text-xs font-medium">{label}</span>
    </>
  );
};

export default TextField;
