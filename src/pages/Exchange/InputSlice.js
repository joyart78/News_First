import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../News/newsSlice.js";

export const fetchCurr = createAsyncThunk(
  "input/fetchCurr",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const inputCurrency = state.input.inputCurrency;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL_CURRENCY}/latest/${inputCurrency}`,
    );
    return await response.json();
  },
);
localStorage.getItem("currencyResult");
localStorage.getItem("currency");

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    inputValue: 0,
    inputCurrency: localStorage.getItem("currency")
      ? localStorage.getItem("currency")
      : "USD",
    resultValue: "",
    resultCurrency: localStorage.getItem("currencyResult")
      ? localStorage.getItem("currencyResult")
      : "USD",
    data: {},
    loading: "idle",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
      console.log(state.inputValue);
    },
    setCurrency: (state, action) => {
      state.inputCurrency = action.payload;
    },
    setResultValue: (state, action) => {
      state.resultValue = action.payload * state.inputValue;
    },
    setResultCurrency: (state, action) => {
      state.resultCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurr.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCurr.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCurr.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setInputValue, setCurrency, setResultValue, setResultCurrency } =
  InputSlice.actions;

export default InputSlice.reducer;
