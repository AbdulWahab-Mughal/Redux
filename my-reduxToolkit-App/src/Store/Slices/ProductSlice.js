import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import STATUS from "../Status/Status";
import axios from "axios";

const INITIAL_STATE = {
  data: [],
  status: STATUS,
};
const ProductSlice = createSlice({
  name: "PRODUCT SLICE",
  initialState: INITIAL_STATE,
  //for Async work we use extraReducers
  extraReducers: (builder) => {
    //addCase is like switchcase
    builder.addCase(fetchApi.pending, (state, action) => {
      console.log("pending", action);
      state.status = STATUS.ISLOADING;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      state.status = STATUS.ISLOADING_SUCESS;
      state.data = [...action.payload];
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      console.log("rejected", action);
      state.status = STATUS.ISLOADING_ERROR;
      state.data = [];
    });
  },
});
//create Async thunk in a middleware
const fetchApi = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
}); // (products/fetch) means fetching products

const { reducer: ProductReducer } = ProductSlice;

export { fetchApi, ProductReducer };
