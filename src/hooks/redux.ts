import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { ReduxAppDispatch, ReduxRootState } from '../redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => ReduxAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReduxRootState> = useSelector