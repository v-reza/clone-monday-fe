import React, { useMemo, useState } from "react";
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
  children?: React.ReactNode;
  graphql?: IGQLResource;
  // customData?: any ;
  customData?: any;
};

export const Table = (props: TableProps) => {
  const { customData = {} } = props;
  const [query, setQuery] = useState<string>("");

  const [data, setData] = useState<any>(() => customData ?? []);
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
        query,
        setQuery,
        dataTable,
        // dataTable,
      }}
    >
      <Template />
    </TableContext.Provider>
  );
};

export default Table;
