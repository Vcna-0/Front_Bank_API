import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      firstName: '',
      lastName: '',
   },
  reducers: {
      setUserProfile: (state, action) => {
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
      }
  }
});  

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;

