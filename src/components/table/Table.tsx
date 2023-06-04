import React, { useEffect, useMemo, useState } from "react";
import { ITableContext, TableContext } from "./context";
import { IGQLResource } from "./types/gql.type";
import Template from "./layout/Template";
import {
  CellContext,
  ColumnDef,
  ColumnResizeMode,
  HeaderContext,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IPublicFieldProps } from "./types/field.type";
import { ICustomDataTable } from "./types/customdata.type";

export type TableProps = {
  children: React.ReactNode;
  graphql?: IGQLResource;
  customData?: ICustomDataTable<any>;
  name?: string
  color?: string
  onSelectedRows?: (selectedRows: any[]) => void
};

export const Table = (props: TableProps) => {
  const { customData = { data: [] }, name = "New Group", color = "#FFFF", children } = props;
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any>(() => customData?.data ?? []);
  const [selectedRows, setSelectedRows] = useState<boolean[]>([])
  const defaultColumns: ColumnDef<any>[] = useMemo(() => {
    return React.Children.map(props.children, (item: any) => {
      const { props } = item as React.ReactElement<IPublicFieldProps>;
      const { label, source } = props;
      return {
        header: label,
        footer: (props: HeaderContext<any, unknown>) => props.column.id,
        accessorFn: (props: any) => props[source],
        cell: (props: CellContext<any, unknown>) => props.getValue(),
        accessorKey: source,
      };
    }) ?? [];
  }, []);

  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns]);
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");


  // props onGetSelectedRows
  useEffect(() => {
    props.onSelectedRows && props.onSelectedRows(
      selectedRows.map((item, index) => {
        return item ? data[index] : null
      }).filter((e) => e !== null)
    )
  }, [selectedRows])

  const dataTable: any = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugAll: true,
  });

  return (
    <TableContext.Provider
      value={{
        ...props,
        name,
        color,
        children,
        query,
        setQuery,
        dataTable,
        columnResizeMode,
        selectedRows,
        setSelectedRows,
        data,
        setData
      }}
    >
      <Template />
    </TableContext.Provider>
  );
};

export default Table;
