import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/auth";

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
