import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{ email: null 
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.email = action.payload;
          },
          logout: (state) => {
            state.email = null;
          },
    }
});

export const {loginSuccess,logout}=userSlice.actions;
export default userSlice.reducer;