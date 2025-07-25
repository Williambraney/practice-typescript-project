import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './sessionSlice';

export const store = configureStore({
    reducer : {
        // Add your reducers here
        session : sessionSlice.reducer
    }
})