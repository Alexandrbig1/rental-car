import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../services/apiService";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/cars?limit=12&page=${page}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
