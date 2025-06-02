import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail } from "./userThunks";

const initialState = {
  userInfo: {},
  statusMessage: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return { ...initialState };
    },
    handleStatutMessage: (state) => {
      state.statusMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByEmail.pending, (state) => {
        state.statusMessage = "Logging in...";
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.isLogged = true;
        state.statusMessage = action.payload.message;
        state.userInfo = action.payload.body;
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.statusMessage = action.payload.message;
      });
  },
});

export const { logout, handleStatutMessage } = userSlice.actions;
export default userSlice.reducer;
