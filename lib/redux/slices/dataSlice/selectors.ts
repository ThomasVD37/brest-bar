import { ReduxState } from "../../store"

export const selectBars = (state: ReduxState) => state.data.bars
export const selectFilter = (state: ReduxState) => state.data.filter
export const selectCurrentBars = (state: ReduxState) => state.data.currentBars
export const selectSorting = (state: ReduxState) => state.data.sorting
