import { ReduxState } from "../../store"

export const selectzoom = (state: ReduxState) => state.map.map_zoom
export const selectcenter = (state: ReduxState) => state.map.map_center
export const isPopupVisible = (state: ReduxState) => state.map.popupVisible