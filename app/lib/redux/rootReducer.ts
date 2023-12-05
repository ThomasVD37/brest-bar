/* Instruments */

import { dataSlice } from "./slices/dataSlice";
import { mapSlice } from "./slices/mapSlice";

export const reducer = {
  data: dataSlice.reducer,
  map: mapSlice.reducer,
}
