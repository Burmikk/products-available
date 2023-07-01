import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filter-slice";

export const store = configureStore({
    reducer: {
        filters: filterSlice,
    },
});
