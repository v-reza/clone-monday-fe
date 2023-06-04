import React, { useMemo } from "react";
import { useTableContext } from "../context";
import TableBody from "./TableBody";
import { getRandomHexColor, hasNextItem } from "@/src/utils/functions";
import clsx from "clsx";
import TableHeader from "./TableHeader";

const TableFooter = () => {
  const { dataTable } = useTableContext();
  const row = useMemo(() => {
    return dataTable.getRowModel().rows[0];
  }, []);
  return (
    <div className="relative">
      <div className="w-full h-[1.8rem] flex">
        <div key={row.id} className="flex ml-[2.8rem] w-full">
          {row.getVisibleCells().map((cell, i) => (
            <div
              key={cell.id}
              {...{
                style: {
                  width: cell.column.getSize(),
                  borderBottomLeftRadius: i == 1 ? "6px" : "0px",
                },
              }}
              className={clsx("h-[1.8rem]", {
                "bg-[#31324E] border border-b-[#4C4E69] border-t-0 b border-l-[#4C4E69] border-r-[#4C4E69]":
                  i === 0 ? false : true,
                "border-l-0": !hasNextItem(row.getVisibleCells(), i),
              })}
            ></div>
          ))}
        </div>
        {row.getVisibleCells().map((cell, i) => (
          <div
            className={clsx(
              "w-full bg-[#31324E] border border-b-[#4C4E69] border-t-0 b border-l-0 border-r-[#4C4E69]",
              {
                "border-r-0": hasNextItem(row.getVisibleCells(), i)
                  ? true
                  : false,
              }
            )}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TableFooter;
