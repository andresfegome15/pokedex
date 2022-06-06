import { createSlice } from '@reduxjs/toolkit';

export const header1 = createSlice({
    name: 'header1',
    initialState: "red",
    reducers: {
        changeheader1:(state, action)=>action.payload
    }
})

export const { changeheader1 } = header1.actions;

export default header1.reducer;
