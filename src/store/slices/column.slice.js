import { createSlice } from '@reduxjs/toolkit';

export const column = createSlice({
    name: 'column',
    initialState: "1fr 1fr 1fr 1fr",
    reducers: {
        changecolumn:(state, action) => action.payload
    }
})

export const { changecolumn } = column.actions;

export default column.reducer;
