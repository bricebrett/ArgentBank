import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail, getUserProfile, updateUserName } from "./userThunks";

const initialState = {
  userInfo: {},
  statusMessage: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => ({ ...initialState }),
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
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.statusMessage = action.payload.message;
      })

      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userInfo = action.payload.body;
      })

      .addCase(updateUserName.pending, (state) => {
        state.statusMessage = "Updating username...";
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userInfo = {
          ...state.userInfo,
          userName: action.payload.body.userName,
        };
        state.statusMessage = action.payload.message;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.statusMessage = action.payload.message;
      });
  },
});

export const { logout, handleStatutMessage } = userSlice.actions;
export default userSlice.reducer;
