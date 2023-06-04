import React, { useMemo } from "react";
import { IPublicFieldProps } from "../types/field.type";
import { useTableContext } from "../context";
import { useRowContext } from "../Row";
import clsx from "clsx";
import _ from "lodash"

type TextFieldProps = IPublicFieldProps & {
  className?: string
}

const TextField = (props: TextFieldProps) => {
  const { source, label, className } = props;
  const { data, setData } = useRowContext()

  const value = useMemo(() => {
    return _.get(data, source)
  }, [JSON.stringify(data)])

  return (
    <>
      <span className={clsx("text-[#D6D8DF] text-xs font-medium", className)}>{value}</span>
    </>
  );
};

export default TextField;
