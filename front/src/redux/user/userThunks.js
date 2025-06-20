import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/auth";

/**
 * Thunks Redux liés à la gestion des utilisateurs (authentification, profil, mise à jour du nom).
 *
 * - `fetchUserByEmail` :
 *    -> Méthode POST vers /login.
 *    -> Authentifie un utilisateur à partir de son email et mot de passe.
 *    -> Stocke le token dans le `localStorage` si "remember me" est activé, sinon dans `sessionStorage`.
 *
 * - `getUserProfile` :
 *    -> Méthode GET vers /profile.
 *    -> Récupère les informations de profil de l'utilisateur connecté grâce au token.
 *
 * - `updateUserName` :
 *    -> Méthode PUT vers /profile.
 *    -> Permet de modifier uniquement le champ `userName` dans le profil utilisateur.
 *
 */

const BASE_URL = "http://localhost:3001/api/v1/user/";

export const fetchUserByEmail = createAsyncThunk(
  "user/fetchUserByEmail",
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email,
        password,
      });

      const token = response.data.body.token;

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, thunkAPI) => {
    try {
      const token = getToken();

      const response = await axios.get(`${BASE_URL}profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "user/updateUserName",
  async ({ userName }, thunkAPI) => {
    try {
      const token = getToken();

      const response = await axios.put(
        `${BASE_URL}profile`,
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
