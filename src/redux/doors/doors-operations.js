import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDoors } from "shared/api/fetchDoors";
import { getFilteredDoors } from "shared/api/fetchDoors";

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
