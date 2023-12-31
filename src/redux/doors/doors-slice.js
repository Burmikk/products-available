import { createSlice } from "@reduxjs/toolkit";
import {
    fetchAllDoors,
    fetchLoadMoreDoors,
    fetchFilterDoors,
    fetchDoorCard,
    fetchReservation,
} from "./doors-operations";

const initialState = {
    doors: [],
    totalDoors: null,
    error: null,
    isLoading: false,
    doorCard: null,
    showForm: false,
    reserveMessage: "",
    formValue: null,
    nextPage: "",
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
                state.nextPage = payload.next;
                state.doors = payload.results;
                state.totalDoors = payload.count;
            })
            .addCase(fetchAllDoors.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchLoadMoreDoors.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchLoadMoreDoors.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.nextPage = payload.next;
                state.doors = [...state.doors, ...payload.results];
                state.totalDoors = payload.count;
            })
            .addCase(fetchLoadMoreDoors.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchFilterDoors.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchFilterDoors.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.nextPage = payload.next;
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
                state.isLoading = true;
                state.reserveMessage = "";
            })
            .addCase(fetchReservation.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.reserveMessage = payload;
            })
            .addCase(fetchReservation.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload.data.message;
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
        clearFormValue: (state) => {
            state.formValue = null;
        },
        resetError: (state) => {
            state.error = null;
        },
    },
});

export const { showReserve, setReserveMessage, setFormValue, clearDoorCard, clearFormValue, resetError } =
    doorsSlice.actions;
export default doorsSlice.reducer;
