"use client"
import { TableOptions } from '@tanstack/react-table';
import { TableProps } from './Table';
import React, { createContext, useContext } from "react"

type DataTable<T> = TableOptions<T>

export type ITableContext = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  dataTable: DataTable<any>
} & TableProps

export const TableContext = createContext<ITableContext | null>(null)
export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error("useTableContext must be used within a TableContextProvider")
  }
  return context
}

