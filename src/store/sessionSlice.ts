import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
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
        addSession(
            state: SessionState,
            action: PayloadAction<Session>
        ){
            state.sessions.push(action.payload);
        },
        removeSession(
            state: SessionState,
            action: PayloadAction<string>
        ){
            state.sessions = state.sessions.filter(
                session => session.id !== action.payload
            );
        }
    }

})

export const { addSession, removeSession } = sessionSlice.actions;