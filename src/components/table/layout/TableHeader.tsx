import React from "react";
import { useTableContext } from "../context";

const TableHeader = () => {
  const { customData } = useTableContext();
  const { name, color, items } = customData;
  const { thead } = items;
  return (
    <div
      className="px-2 rounded-md bg-red-200"
      style={{ borderTopLeftRadius: "10px" }}
    >
      <tr>
        <th>head</th>
      </tr>
    </div>
  );
};

export default TableHeader;
