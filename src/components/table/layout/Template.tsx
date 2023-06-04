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
import TableFooter from "./TableFooter";

const Template = () => {
  const { name, color } = useTableContext();
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
      <div className="border border-[#4C4E69] rounded-l-md mt-2">
        <div className="min-w-full flex flex-col">
          {/* THEAD */}
          <TableHeader />
          {/* TBODY */}
          <TableBody />
        </div>
      </div>
      <TableFooter />
    </div>
  );
};

export default Template;
