import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ClientService from './clientFeature';
import {toast} from "react-toastify";

const initialState = {
  clients  : [],
  isError : false,
  isLoading : false,
  isSuccess : false,
  message : '' 
}

// create the client
export const createclient = createAsyncThunk(
  'client/create',
  async(formData, thunkAPI) => {
    try{
      return await ClientService.createClient(formData);
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
// delete the client
export const deleteclient  = createAsyncThunk(
  'client/delete', 
  async(id, thunkAPI) => {
    try{
     return await ClientService.deleteClient(id)
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
// get all client

export const getAllclient = createAsyncThunk(
  'client/getAll',
  async(_, thunkAPI) =>{
    try{
      return await ClientService.getClient();
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
// get singleclient
export const getSingleclient = createAsyncThunk(
  'client/getSingleClient',
  async(id, thunkAPI) => {
    try{
     return await ClientService.getSingleClient(id);
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
// update the client
export const updateclient = createAsyncThunk(
  'client/updateclient', 
  async({id, formData}, thunkAPI) => {
    try{
    return await ClientService.updateClient(id, formData);
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

const clientSlice = createSlice({
  name : "client",
  initialState,
  reducers : {
    reset : (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createclient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createclient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.clients.push(action.payload);
        toast.success("client added successfully");
      })
      .addCase(createclient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllclient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllclient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.clients = action.payload;
      })
      .addCase(getAllclient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteclient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteclient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("client deleted successfully");
      })
      .addCase(deleteclient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getSingleclient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleclient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.clients = action.payload;
      })
      .addCase(getSingleclient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateclient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateclient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("client updated successfully");
      })
      .addCase(updateclient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
    }
})

export const selectclient = (state) => state.client.client;
export const {reset} = clientSlice.actions;
export default clientSlice.reducer