import { ColumnResizeMode } from '@tanstack/react-table';
"use client"
import { Table, TableOptions } from '@tanstack/react-table';
import { TableProps } from './Table';
import React, { createContext, useContext } from "react"

export type ITableContext = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  dataTable: Table<any>
  columnResizeMode: ColumnResizeMode
  selectedRows: boolean[]
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean[]>>
  data: any[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
} & TableProps

export const TableContext = createContext<ITableContext | null>(null)
export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error("useTableContext must be used within a TableContextProvider")
  }
  return context
}

