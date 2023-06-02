"use client";

import React from "react";

type RecentlyBoardProps = {
  name: string;
};
export const RecentlyBoard = (props: RecentlyBoardProps) => {
  return (
    <>
      <div className="bg-transparent hover:bg-gray-700 rounded-md p-4 w-[40rem] border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex px-2 items-center space-x-4">
            <i className="far fa-th-large text-white text-md"></i>
            <span className="text-sm text-white">{props.name}</span>
          </div>
          <div
            className="tooltip-top"
            data-tooltip="Add to favourites"
            data-tooltip-position="top"
          >
            <i className="far fa-star text-white text-md"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyBoard;
