import { createSlice } from '@reduxjs/toolkit';

type Session = {
    id: string;
    title: string;
    summary: string;
}

type SessionState = {
    sessions: Session[]
}

const initialState: SessionState = {
    sessions : []
}

export const sessionSlice = createSlice({
    name : 'session',
    initialState,
    reducers : {

    }
})