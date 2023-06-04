import React, { useCallback, useState } from "react";
import { useTableContext } from "../context";
import { CheckboxInput } from "../../form";
import { flexRender } from "@tanstack/react-table";

const TableHeader = () => {
  const {
    dataTable,
    color,
    columnResizeMode,
    setSelectedRows,
    data,
    selectedRows
  } = useTableContext();
  const [selectedHeader, setSelectedHeader] = useState<boolean>(false);
  const onSelectAll = useCallback(() => {
    setSelectedRows((prev) => {
      const lengthData = data.length
      const newSelectedRows = new Array(lengthData).fill(!selectedHeader)
      return newSelectedRows
    })
    setSelectedHeader((prev) => !prev);
  }, [selectedHeader, selectedRows, data]);
  // console.log(selectedRows)


  return (
    <div
      className="flex border border-b-[#4C4E69] border-t-0 b border-l-0 border-r-0 bg-[#31324E]"
      style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "0px" }}
    >
      <div
        className="w-[0.28rem] ml-[0.2px] z-10 absolute h-[1.8rem]"
        style={{
          borderTopLeftRadius: "20px",
          backgroundColor: color,
        }}
      >
        &nbsp;
      </div>
      <div className="border border-b-0 border-t-0 b border-l-0 border-r-[#4C4E69]">
        <div className="ml-4 my-1">
          <CheckboxInput
            checked={selectedHeader}
            onChange={(e) => onSelectAll()}
          />
        </div>
      </div>
      {dataTable.getHeaderGroups().map((headerGroup) => (
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
                            dataTable.getState().columnSizingInfo.deltaOffset
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
  );
};

export default TableHeader;
