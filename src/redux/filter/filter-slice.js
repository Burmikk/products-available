import { createSlice } from "@reduxjs/toolkit";
import { fetchFilter } from "./filter-operations";

const initialState = {
    filters: [],
    error: null,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilter.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchFilter.fulfilled, (state, { payload }) => {
                state.filters = payload;
            })
            .addCase(fetchFilter.rejected, (state, { payload }) => {
                state.error = payload;
            });
    },
});

export default filterSlice.reducer;
