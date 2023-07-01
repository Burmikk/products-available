import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filter-slice";
import doorsSlice from "./doors/doors-slice";

export const store = configureStore({
    reducer: {
        filters: filterSlice,
        doors: doorsSlice,
    },
});
