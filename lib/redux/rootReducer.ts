/* Instruments */
import { dataSlice } from './slices'
import { mapSlice } from './slices'

export const reducer = {
  data: dataSlice.reducer,
  map: mapSlice.reducer,
}
