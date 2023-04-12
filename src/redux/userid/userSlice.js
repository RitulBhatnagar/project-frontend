import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userFeature';
import {toast} from "react-toastify";

const initialState = {
  users  : [],
  isError : false,
  isLoading : false,
  isSuccess : false,
  message : '' 
}

// create the user
export const createuser = createAsyncThunk(
  'user/create',
  async(formData, thunkAPI) => {
    try{
      return await userService.createuser(formData);
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
// delete the user
export const deleteuser  = createAsyncThunk(
  'user/delete', 
  async(id, thunkAPI) => {
    try{
     return await userService.deleteuser(id)
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
// get all user

export const getAlluser = createAsyncThunk(
  'user/getAll',
  async(_, thunkAPI) =>{
    try{
      return await userService.getuser();
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
// get singleuser
export const getSingleuser = createAsyncThunk(
  'user/getSingleuser',
  async(id, thunkAPI) => {
    try{
     return await userService.getSingleuser(id);
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
// update the user
export const updateuser = createAsyncThunk(
  'user/updateuser', 
  async({id, formData}, thunkAPI) => {
    try{
    return await userService.updateuser(id, formData);
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

const userSlice = createSlice({
  name : "user",
  initialState,
  reducers : {
    reset : (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.users.push(action.payload);
        toast.success("user added successfully");
      })
      .addCase(createuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAlluser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAlluser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.entities = action.payload;
      })
      .addCase(getAlluser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("user deleted successfully");
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getSingleuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(getSingleuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("user updated successfully");
      })
      .addCase(updateuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
    }
})

export const selectuser = (state) => state.user.user;
export const {reset} = userSlice.actions;
export default userSlice.reducer