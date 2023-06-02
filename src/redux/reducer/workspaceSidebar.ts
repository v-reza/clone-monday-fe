"use client"
import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";
import { ReduxRootState } from "..";

interface State {
  isOpen: boolean
}
const initialState: State = {
  isOpen: false
}
const workspaceSidebarSlice = createSlice({
  name: "workspaceSidebar",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { setIsOpen } = workspaceSidebarSlice.actions
export const workspaceSelector = (state: ReduxRootState) => state.workspaceSidebar
export default workspaceSidebarSlice.reducer