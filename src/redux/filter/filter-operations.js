import { createAsyncThunk } from "@reduxjs/toolkit";

import { getFilters } from "shared/api/filterApi";

export const fetchFilter = createAsyncThunk("filters/fetchAllFilters", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getFilters();
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
