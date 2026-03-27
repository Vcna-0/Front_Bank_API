import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      isAuthenticated: false,
      firstName: '',
      lastName: '',
   },
  reducers: {

      setAuthentication: (state, action) => {
         state.isAuthenticated = action.payload;
      },

      setUserProfile: (state, action) => {
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
      },
      
      clearUserProfile: (state) => {
         state.isAuthenticated = false;
         state.firstName = '';
         state.lastName = ''; 
      }
  }
});  

export const { setUserProfile, clearUserProfile, setAuthentication } = userSlice.actions;

export default userSlice.reducer;

