import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EngageService from './engageFeature';
import {toast} from "react-toastify";

const initialState = {
  engages  : [],
  isError : false,
  isLoading : false,
  isSuccess : false,
  message : '' 
}

// create the Engage
export const createEngage = createAsyncThunk(
  'engage/create',
  async(formData, thunkAPI) => {
    try{
      return await EngageService.createEngage(formData);
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
)
// delete the Engage
export const deleteEngage  = createAsyncThunk(
  'engage/delete', 
  async(id, thunkAPI) => {
    try{
     return await EngageService.deleteEngage(id)
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
)
// get all Engage

export const getAllEngage = createAsyncThunk(
  'engage/getAll',
  async(_, thunkAPI) =>{
    try{
      return await EngageService.getEngage();
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
)
// get singleEngage
export const getSingleEngage = createAsyncThunk(
  'engage/getSingleEngage',
  async(id, thunkAPI) => {
    try{
     return await EngageService.getSingleEngage(id);
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
)
// update the Engage
export const updateEngage = createAsyncThunk(
  'engage/updateEngage', 
  async({id, formData}, thunkAPI) => {
    try{
    return await EngageService.updateEngage(id, formData);
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
)

const engageSlice = createSlice({
  name : "engage",
  initialState,
  reducers : {
    reset : (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEngage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEngage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.engages.push(action.payload);
        toast.success("Engage added successfully");
      })
      .addCase(createEngage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllEngage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEngage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.entities = action.payload;
      })
      .addCase(getAllEngage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteEngage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEngage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Engage deleted successfully");
      })
      .addCase(deleteEngage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getSingleEngage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleEngage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.engages = action.payload;
      })
      .addCase(getSingleEngage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateEngage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEngage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Engage updated successfully");
      })
      .addCase(updateEngage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
    }
})

export const selectEngage = (state) => state.engage.engage;
export const {reset} = engageSlice.actions;
export default engageSlice.reducer