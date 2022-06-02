import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const backgroundSlice = createSlice({
		name: 'background',
    initialState: "",
    reducers: {
        changeBackground: (state, actions) => actions.payload
        
    }
})
export const {changeBackground} = backgroundSlice.actions
export default backgroundSlice.reducer;