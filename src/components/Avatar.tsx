"use client";
import React, { useMemo } from "react";
import { getInitialAvatar } from "../utils/functions";

type AvatarProps = {
  size: "small" | "medium" | "large" | "xlarge";
  name: string;
};

export const Avatar = (props: AvatarProps) => {
  const { size, name } = props;

  const splitName = useMemo((): string => {
    return getInitialAvatar(name);
  }, [name]);
  return (
    <div>
      {size === "small" && (
        <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
          <span className="text-sm font-medium leading-none text-white">
            {splitName}
          </span>
        </div>
      )}
      {size === "medium" && (
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
          <span className="font-medium leading-none text-white">
            {splitName}
          </span>
        </div>
      )}
      {size === "large" && (
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
          <span className="text-lg font-medium leading-none text-white">
            {splitName}
          </span>
        </div>
      )}
      {size === "xlarge" && (
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
          <span className="text-xl font-medium leading-none text-white">
            {splitName}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
