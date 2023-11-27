/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchBarApi } from './thunks'

const initialState = {
    bars: [],
    status: 'idle',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchBarApi.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBarApi.fulfilled, (state, action) => {
                state.status = 'done'
                state.bars = action.payload
            })
    },
})