import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState, type AppDispatch } from './store';

type  DispatchFunction = () => AppDispatch;

export const useSessionDispatch: DispatchFunction = useDispatch;

export const useSessionSelector: TypedUseSelectorHook<RootState> = useDispatch;