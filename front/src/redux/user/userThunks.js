import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
