/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchBarApi } from './thunks'

const initialState: dataSliceState = {
    bars: [{}],
    filter: 'none',
    sorting: 'none',
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
        setSorting: (state, action) => {
            state.sorting = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchBarApi.fulfilled, (state, action) => {
                state.bars = action.payload
                state.currentBars = action.payload
            })
    },
})

export const { setFilter, setCurrentBars, setSorting } = dataSlice.actions

/* Types */
export interface dataSliceState {
    bars: [
        {
            id?: number,
            name?: string,
            location?: {
                type: string,
                coordinates: [number, number]
            },
            place_id?: string,
            rating?: number,
            address?: string,
            status?: string,
            formatted_phone_number?: string,
            international_phone_number?: string,
            maps_url?: string,
            user_ratings_total?: number,
            opening_hours?: string,
            website?: string,
        }
    ],
    filter: string,
    sorting: string,
    currentBars: object[],
}
