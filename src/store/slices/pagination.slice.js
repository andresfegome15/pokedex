import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const paginationSlice = createSlice({
		name: 'pagination',
    initialState: "20",
    reducers: {
        changePagination: (state, actions) => actions.payload
        
    }
})
export const {changePagination} = paginationSlice.actions
export default paginationSlice.reducer;