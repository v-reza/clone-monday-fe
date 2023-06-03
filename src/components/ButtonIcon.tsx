"use client";
import clsx from "clsx";
import React from "react";

type ButtonIconProps = {
  className?: string;
  btnType?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "no-outline";
  icon: string;
  onClick?: () => void;
};

export const ButtonIcon = (props: ButtonIconProps) => {
  const { className, btnType, icon } = props;

  let classes: string = "";

  if (btnType === "primary") {
    classes =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded";
  } else if (btnType === "secondary") {
    classes =
      "bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow";
  } else if (btnType === "danger") {
    classes =
      "bg-red-500 hover:bg-red-700 text-white font-bold rounded";
  } else if (btnType === "warning") {
    classes =
      "bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded";
  } else if (btnType === "success") {
    classes =
      "bg-green-500 hover:bg-green-700 text-white font-bold rounded";
  } else if (btnType === "info") {
    classes =
      "bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded";
  } else if (btnType === "no-outline") {
    classes =
      "bg-inherit hover:bg-gray-700 text-gray-800  border border-gray-400 rounded";
  }
  return (
    <div>
      <button
        type="button"
        onClick={props.onClick}
        className={clsx(
          "inline-flex items-center justify-center px-2 pt-[0.3rem] pb-[0.4rem] border border-transparent text-sm rounded-md text-white focus:outline-none",
          classes,
          className
        )}
      >
        <i className={clsx(icon)}></i>
      </button>
    </div>
  );
};

export default ButtonIcon;
