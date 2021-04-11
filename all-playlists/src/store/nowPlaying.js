import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {apiCall} from './api';

const slice = createSlice({
    initialState: {},
    name: "nowPlaying",
    reducers: {
        play: (state, action) => ({
            ...state,
            nowPlaying: action.payload
        })
    }
})

export const {play} = slice.actions;

export default slice.reducer;