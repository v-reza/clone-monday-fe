"use client";
import React from "react";

type CheckBoxInputProps = {
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
};

export const CheckboxInput = (props: CheckBoxInputProps) => {
  const { value, label } = props;

  return (
    <>
      <div className="relative flex items-center">
        <div className="flex items-center h-5">
          <input
            id={label}
            name={label}
            type="checkbox"
            className="h-4 w-4 border border-[#C0C2D0] rounded accent-gray-700 !bg-red-600 text-transparent"
            style={{ backgroundColor: "black" }}
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
