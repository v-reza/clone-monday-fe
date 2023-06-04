"use client";
import clsx from "clsx";
import React, { useState } from "react";

type CheckBoxInputProps = {
  checked?: boolean
  label?: string;
  onChange?: (value: string) => void;
  className?: string
  styles?: React.CSSProperties
};

export const CheckboxInput = (props: CheckBoxInputProps) => {
  const { checked = false, label, className, styles } = props;
  const onChange = (e: any) => {
    props.onChange && props.onChange(e.target.value);
  }

  return (
    <>
      <div className="relative flex items-center">
        <div className="flex items-center h-5">
          <input
            id={label}
            name={label}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={clsx("h-4 w-4 border border-[#C0C2D0] rounded accent-blue-600", className)}
            style={{ appearance: checked ? "checkbox" : "none", ...styles }}
          />
        </div>
        <div className="ml-3 text-xs">
          <label htmlFor={label} className="font-medium text-[#C0C2D0]">
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckboxInput;
