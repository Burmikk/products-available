import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDoors, fetchFilterDoors, fetchDoorCard, fetchReservation } from "./doors-operations";

const initialState = {
    doors: [],
    totalDoors: null,
    error: null,
    isLoading: false,
    doorCard: null,
    showForm: false,
    reserveMessage: "",
    formValue: null,
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
            })
            .addCase(fetchDoorCard.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchDoorCard.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.doorCard = payload;
            })
            .addCase(fetchDoorCard.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchReservation.pending, (state) => {
                state.error = null;
                // state.isLoading = true;
                state.reserveMessage = "";
            })
            .addCase(fetchReservation.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.reserveMessage = payload;
            })
            .addCase(fetchReservation.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
    reducers: {
        showReserve: (state, { payload }) => {
            state.showForm = payload;
        },
        setReserveMessage: (state, { payload }) => {
            state.reserveMessage = payload;
        },
        setFormValue: (state, { payload }) => {
            state.formValue = payload;
        },
        clearDoorCard: (state) => {
            state.doorCard = null;
        },
    },
});

export const { showReserve, setReserveMessage, setFormValue, clearDoorCard } = doorsSlice.actions;
export default doorsSlice.reducer;
