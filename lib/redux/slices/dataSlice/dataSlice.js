/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchBarApi } from './thunks'

const initialState = {
    bars: [],
    filter: 'none',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
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
            })
    },
})

export const { setFilter } = dataSlice.actions