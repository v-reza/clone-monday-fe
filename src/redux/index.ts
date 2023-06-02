"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import workspaceSidebar from './reducer/workspaceSidebar';

const reducer = combineReducers({
  workspaceSidebar: workspaceSidebar
})

export const store = configureStore({
  reducer,
})

export type ReduxRootState = ReturnType<typeof store.getState>
export type ReduxAppDispatch = typeof store.dispatch