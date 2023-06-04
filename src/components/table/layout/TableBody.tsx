import React, { useCallback, useMemo } from "react";
import { useTableContext } from "../context";
import RowProvider from "../Row";
import { hasNextItem } from "@/src/utils/functions";
import clsx from "clsx";
import { CheckboxInput } from "../../form";
import _ from "lodash";


const AddNewRow = ({ index }: any) => {
  const { dataTable, color, setData, data } = useTableContext();
  const onLastIndex = useMemo(() => {
    return !hasNextItem(data, index);
  }, [data]);

  const onAddNewRow = useCallback(() => {
    const newData = [...data];
    const duplicateKey = _.cloneDeep(newData[index]);
    const fillNullKey = _.keys(duplicateKey).map((key) => {
      return { [key]: null };
    });
    let key = {};
    fillNullKey.forEach((item) => {
      key = { ...key, ...item };
    });

    newData.push(key);
    setData(newData);
  }, [data]);

  return (
    <>
      {onLastIndex && (
        <div
          className={clsx("flex cursor-pointer bg-[#31324E] hover:bg-gray-700")}
          style={{
            borderTopLeftRadius: "2px",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "0px",
          }}
        >
          <div
            className="w-[0.28rem] ml-[0.2px]"
            style={{
              backgroundColor: color,
              opacity: "0.5",
              borderBottomLeftRadius: "20px",
            }}
          >
            &nbsp;
          </div>
          <div
            className={clsx(
              "border border-b-0 border-t-[#4C4E69] b border-l-0 border-r-[#4C4E69]"
            )}
          >
            <div className="ml-[11.5px] my-1">
              <CheckboxInput checked={false} styles={{ opacity: 0.5 }} />
            </div>
          </div>
          <div
            className="w-full flex items-center border border-b-0 border-t-[#4C4E69] b border-l-0 border-r-0"
            onClick={() => onAddNewRow()}
          >
            <div className="px-2 flex items-center justify-center">
              <i className="far mr-2 fa-plus text-xs text-white"></i>
              <span className={clsx("text-[#D6D8DF] text-xs font-medium")}>
                Add rows
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TableBody = () => {
  const { children, dataTable, color, setSelectedRows, selectedRows, data } =
    useTableContext();

  const renderElement = useCallback(
    (index: number, context?: any) => {
      const element: any = children as React.ReactElement<any>;
      return React.cloneElement(element[index], { ...(context ?? {}) });
    },
    [data]
  );

  const onSelectedRows = useCallback(
    (index: number) => {
      setSelectedRows((prev: boolean[]) => {
        const newSelectedRows = [...prev];
        newSelectedRows[index] = !newSelectedRows[index];
        return newSelectedRows;
      });
    },
    [data]
  );

  return (
    <>
      {dataTable.getRowModel().rows.map((row, index) => (
        <RowProvider
          key={row.id}
          defaultData={{ ...row.original, primaryKeyRow: index }}
        >
          <div
            className={clsx("flex cursor-pointer", {
              "bg-[#133774] hover:bg-blue-500/50": selectedRows[index],
              "bg-[#31324E] hover:bg-gray-700": !selectedRows[index],
            })}
            style={{
              borderTopLeftRadius: "2px",
            }}
            key={row.id}
          >
            <div
              className="w-[0.30rem] ml-[0.2px]"
              style={{
                backgroundColor: color,
                borderBottomLeftRadius: "0px",
              }}
            >
              &nbsp;
            </div>
            <div
              className={clsx(
                "border border-b-[#4C4E69] border-t-0 b border-l-0 border-r-[#4C4E69]",
                {
                  "border-b-0": !hasNextItem(
                    dataTable.getRowModel().rows,
                    index
                  )
                    ? true
                    : false,
                  "border-b-[#4C4E69]": hasNextItem(
                    dataTable.getRowModel().rows,
                    index
                  )
                    ? false
                    : true,
                }
              )}
            >
              <div className="ml-[0.7rem] my-1">
                <CheckboxInput
                  checked={selectedRows[index]}
                  onChange={(e) => onSelectedRows(index)}
                />
              </div>
            </div>
            <div className="w-full flex items-start">
              {row.getVisibleCells().map((cell, i) => (
                <div
                  key={cell.id}
                  {...{
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                  className={clsx(
                    "flex items-center justify-start border border-r-[#4C4E69] border-b-[#4C4E69] border-t-0 b border-l-0 px-2 h-full",
                    {
                      "border-b-0": !hasNextItem(
                        dataTable.getRowModel().rows,
                        index
                      )
                        ? true
                        : false,
                      "border-b-[#4C4E69]": hasNextItem(
                        dataTable.getRowModel().rows,
                        index
                      )
                        ? false
                        : true,
                    }
                  )}
                >
                  {renderElement(i)}
                </div>
              ))}
            </div>
          </div>
          <AddNewRow index={index} />
        </RowProvider>
      ))}
    </>
  );
};

export default TableBody;
