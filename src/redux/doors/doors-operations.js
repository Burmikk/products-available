import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDoors, getFilteredDoors, getDoorCard, reservation } from "shared/api/fetchDoors";

export const fetchAllDoors = createAsyncThunk("doors/fetchAllDoors", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getAllDoors();
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchFilterDoors = createAsyncThunk("doors/fetchFilterDoors", async (values, { rejectWithValue }) => {
    try {
        const { data } = await getFilteredDoors(values);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchDoorCard = createAsyncThunk("doors/fetchDoorCard", async (id, { rejectWithValue }) => {
    try {
        const { data } = await getDoorCard(id);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchReservation = createAsyncThunk("doors/fetchReservation", async (value, { rejectWithValue }) => {
    try {
        const { data } = await reservation(value);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
