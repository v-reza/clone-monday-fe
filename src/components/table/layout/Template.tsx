"use client";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import { useTableContext } from "../context";
import TableBody from "./TableBody";
import { CheckboxInput } from "../../form";
import {
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import clsx from "clsx";
import { hasNextItem } from "@/src/utils/functions";
import RowProvider from "../Row";

const Template = () => {
  const defaultColumns: ColumnDef<any>[] = useMemo(() => {
    return [
      {
        header: "Project",
        footer: (props) => props.column.id,
        accessorFn: (props) => props.project_name,
        cell: (props) => props.getValue(),
        accessorKey: "Project",
      },
      {
        header: "Task",
        footer: (props) => props.column.id,
        accessorFn: (props) => props.task_name,
        cell: (props) => props.getValue(),
        accessorKey: "Task",
      },
      {
        header: "Status",
        footer: (props) => props.column.id,
        accessorFn: (props) => props.status_name,
        cell: (props) => props.getValue(),
        accessorKey: "Status",
      },
    ];
  }, []);

  const { customData } = useTableContext();
  const { name, color, items } = customData;
  const { thead, tbody } = items;
  const [data] = useState(() => [...tbody]);
  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns]);
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");
  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });
  return (
    <div className="relative w-full h-full">
      <div className="flex items-center">
        <div
          className="mr-4 rounded-md px-2 cursor-pointer tooltip-top"
          data-tooltip="Collapse Group"
          data-tooltip-position="top"
        >
          <i className="far fa-chevron-down text-sm" style={{ color }}></i>
        </div>
        <div>
          <span style={{ color }} className="text-lg font-medium">
            {name}
          </span>
        </div>
      </div>
      <div className="border border-[#4C4E69] rounded-md mt-2">
        <div className="min-w-full flex flex-col">
          {/* THEAD */}
          <div
            className="flex border border-b-[#4C4E69] border-t-0 b border-l-0 border-r-0 bg-[#31324E]"
            style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "5px" }}
          >
            <div
              className="w-[0.30rem] ml-[0.2px] z-10 absolute h-[1.8rem]"
              style={{
                borderTopLeftRadius: "20px",
                backgroundColor: color,
              }}
            >
              &nbsp;
            </div>
            <div className="border border-b-0 border-t-0 b border-l-0 border-r-[#4C4E69]">
              <div className="ml-4 my-1">
                <CheckboxInput />
              </div>
            </div>
            {table.getHeaderGroups().map((headerGroup) => (
              <div key={headerGroup.id} className="w-full flex items-center">
                {headerGroup.headers.map((header) => (
                  <div
                    key={header.id}
                    {...{
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                      },
                    }}
                    className="flex items-center justify-start pl-2 h-full"
                  >
                    <div className="w-full flex items-center justify-center">
                      <span className="text-[#D6D8DF] text-sm font-medium">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                    </div>
                    <div
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        style: {
                          transform:
                            columnResizeMode === "onEnd" &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                  table.getState().columnSizingInfo.deltaOffset
                                }px)`
                              : "",

                          width: "0.25rem",
                          cursor: "col-resize",
                        },
                      }}
                      className="border border-r-[#4C4E69] border-b-0 border-t-0 b border-l-0 h-full hover:bg-blue-500 tooltip-top"
                      data-tooltip="Resize Column"
                      data-tooltip-position="top"
                    >
                      {" "}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center border-0 border-b-0 border-t-0 b border-l-0 px-2 h-full ">
                  <div
                    className="rounded-md px-2 hover:bg-gray-600 cursor-pointer tooltip-top"
                    data-tooltip="Add Column"
                    data-tooltip-position="top"
                  >
                    <i className="far fa-plus text-md text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* TBODY */}
          {table.getRowModel().rows.map((row, index) => (
            <div
              className="flex bg-[#31324E] hover:bg-gray-700 cursor-pointer"
              style={{
                borderTopLeftRadius: "2px",
                borderBottomLeftRadius: hasNextItem(
                  table.getRowModel().rows,
                  index
                )
                  ? "0px"
                  : "6px",
                borderBottomRightRadius: hasNextItem(
                  table.getRowModel().rows,
                  index
                )
                  ? "0px"
                  : "5px",
              }}
              key={row.id}
            >
              <div
                className="w-[0.30rem] ml-[0.2px]"
                style={{
                  backgroundColor: color,
                  borderBottomLeftRadius: hasNextItem(
                    table.getRowModel().rows,
                    index
                  )
                    ? "0px"
                    : "20px",
                }}
              >
                &nbsp;
              </div>
              <div
                className={clsx(
                  "border border-b-[#4C4E69] border-t-0 b border-l-0 border-r-[#4C4E69]",
                  {
                    "border-b-0": !hasNextItem(table.getRowModel().rows, index)
                      ? true
                      : false,
                    "border-b-[#4C4E69]": hasNextItem(
                      table.getRowModel().rows,
                      index
                    )
                      ? false
                      : true,
                  }
                )}
              >
                <div className="ml-[0.7rem] my-1">
                  <CheckboxInput />
                </div>
              </div>
              <div className="w-full flex items-start">
                {row.getVisibleCells().map((cell) => (
                  <RowProvider
                    key={cell.id}
                    defaultData={cell}
                  >
                    <div
                      key={cell.id}
                      {...{
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
                      className={clsx(
                        "flex items-center justify-start border border-r-[#4C4E69] border-b-[#4C4E69] border-t-0 b border-l-0 px-2 h-full ",
                        {
                          "border-b-0": !hasNextItem(
                            table.getRowModel().rows,
                            index
                          )
                            ? true
                            : false,
                          "border-b-[#4C4E69]": hasNextItem(
                            table.getRowModel().rows,
                            index
                          )
                            ? false
                            : true,
                        }
                      )}
                    >
                      <span className="text-[#D6D8DF] text-xs font-medium">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </span>
                    </div>
                  </RowProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;
