"use client";
import clsx from "clsx";
import React from "react";

export type BtnIconProps = {
  position: "left" | "right";
  className: string;
};

type ButtonProps = {
  className?: string;
  classNameLabel?: string;
  btnType?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "no-outline"
    | "outline-secondary";
  label?: string;
  icon?: BtnIconProps;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { className, btnType, label, icon, classNameLabel } = props;

  let classes: string = "";

  if (btnType === "primary") {
    classes =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  } else if (btnType === "secondary") {
    classes =
      "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow";
  } else if (btnType === "danger") {
    classes =
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
  } else if (btnType === "warning") {
    classes =
      "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
  } else if (btnType === "success") {
    classes =
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
  } else if (btnType === "info") {
    classes =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  } else if (btnType === "no-outline") {
    classes =
      "bg-inherit hover:bg-gray-700 text-gray-800  py-2 px-4 border border-gray-400 rounded";
  } else if (btnType === "outline-secondary") {
    classes = "bg-inherit border border-gray-600 hover:bg-gray-700 rounded"
  }

  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className={clsx(
          "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md text-white focus:outline-none",
          classes,
          className
        )}
      >
        {icon && icon.position === "left" && icon.className && (
          <i className={clsx("-ml-0.5 mr-2", icon.className)}></i>
        )}
        <span className={clsx("text-white text-xs", classNameLabel)}>
          {label}
        </span>
        {icon && icon.position === "right" && icon.className && (
          <i className={clsx("-mr-0.5 ml-2", icon.className)}></i>
        )}
      </button>
    </>
  );
};

export default Button;
