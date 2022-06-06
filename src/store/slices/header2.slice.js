import { createSlice } from '@reduxjs/toolkit';

export const header2 = createSlice({
    name: 'header2',
    initialState: "black",
    reducers: {
        changeheader2:(state, action) => action.payload
    }
})

export const { changeheader2 } = header2.actions;

export default header2.reducer;
