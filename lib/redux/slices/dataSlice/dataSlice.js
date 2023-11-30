/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchBarApi } from './thunks'

const initialState = {
    bars: [],
    filter: 'none',
    currentBars: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setCurrentBars: (state, action) => {
            state.currentBars = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchBarApi.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBarApi.fulfilled, (state, action) => {
                state.status = 'done'
                state.bars = action.payload
                state.currentBars = action.payload
            })
    },
})

export const { setFilter, setCurrentBars } = dataSlice.actions