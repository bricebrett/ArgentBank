import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail, getUserProfile, updateUserName } from "./userThunks";

/**
 * Slice Redux pour gérer l'état utilisateur.
 *
 * - `userInfo` : stocke les informations de l'utilisateur connecté (nom, prénom, etc.).
 * - `isLogged` : booléen indiquant si l'utilisateur est authentifié.
 *
 * Reducers :
 * - `logout` : réinitialise l'état utilisateur à sa valeur initiale (déconnexion).
 *
 * ExtraReducers :
 * - `fetchUserByEmail.fulfilled` : déclenché après une connexion réussie, passe `isLogged` à `true`.
 * - `getUserProfile.fulfilled` : remplit `userInfo` avec les données du profil et passe `isLogged` à `true`.
 * - `updateUserName.fulfilled` : met à jour uniquement le champ `userName` de `userInfo`.
 */

const initialState = {
  userInfo: {},
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByEmail.fulfilled, (state) => {
        state.isLogged = true;
      })

      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userInfo = action.payload.body;
        state.isLogged = true;
      })

      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userInfo = {
          ...state.userInfo,
          userName: action.payload.body.userName,
        };
      });
  },
});

export const { logout, handleStatutMessage } = userSlice.actions;
export default userSlice.reducer;
