import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDoors, fetchFilterDoors } from "./doors-operations";

const initialState = {
    doors: [],
    totalDoors: null,
    error: null,
    isLoading: false,
};

const doorsSlice = createSlice({
    name: "doors",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDoors.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchAllDoors.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.doors = payload.results;
                state.totalDoors = payload.count;
            })
            .addCase(fetchAllDoors.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchFilterDoors.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchFilterDoors.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.doors = payload.results;
                state.totalDoors = payload.count;
            })
            .addCase(fetchFilterDoors.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export default doorsSlice.reducer;
