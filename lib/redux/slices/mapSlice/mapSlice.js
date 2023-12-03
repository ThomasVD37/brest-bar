/* Core */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    map_zoom: [12],
    map_center: [-4.54, 48.40],
    popupVisible: false,
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setZoom: (state, action) => {
            state.map_zoom = action.payload
        },
        setCenter: (state, action) => {
            state.map_center = action.payload
        },
        setPopupVisible: (state) => {
            state.popupVisible = true
        },
        setPopupInvisible: (state) => {
            state.popupVisible = false
        },
    },
})

export const { setCenter, setZoom, setPopupInvisible, setPopupVisible } = mapSlice.actions