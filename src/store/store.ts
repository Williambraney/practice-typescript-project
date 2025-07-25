import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './sessionSlice';

export const store = configureStore({
    reducer : {
        // Add your reducers here
        session : sessionSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;