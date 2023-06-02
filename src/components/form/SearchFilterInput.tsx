import React, { useCallback } from "react";
import { InputProps } from "../types/input.type";
import clsx from "clsx";

type SearchFilterInputProps = InputProps & {
  filters: React.ReactNode;
};

export const SearchFilterInput = (props: SearchFilterInputProps) => {
  const {
    label = "",
    value = "",
    placeholder = "Search anything",
    className,
    classNameInput,
    defaultValue,
    filters
  } = props;

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange && props.onChange(e.target.value);
    },
    [value]
  );

  return (
    <div>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className={clsx("mt-1 relative rounded-md shadow-sm", className)}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={clsx(
            "block w-full px-4 p-1 pl-8 text-sm font-normal rounded-md text-white border border-gray-700 focus:border-[#2553a1] bg-[#30324E] focus:ring-0 focus:ring-offset-0 focus:outline-0",
            classNameInput
          )}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        <div className="absolute inset-y-0 left-0 px-2 hover:bg-gray-700 hover:rounded-md flex items-center cursor-pointer ">
          <i className="far fa-search text-sm text-gray-500"></i>
        </div>
        {filters}
      </div>
    </div>
  );
};

export default SearchFilterInput;
