import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import entityService from './entityFeatures';
import {toast} from "react-toastify";

const initialState = {
  entities  : [],
  isError : false,
  isLoading : false,
  isSuccess : false,
  message : '' 
}

// create the entity
export const createEntity = createAsyncThunk(
  'entity/create',
  async(formData, thunkAPI) => {
    try{
      return await entityService.createEntity(formData);
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
// delete the entity
export const deleteEntity  = createAsyncThunk(
  'entity/delete', 
  async(id, thunkAPI) => {
    try{
     return await entityService.deleteEntity(id)
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
// get all entity

export const getAllEntity = createAsyncThunk(
  'entity/getAll',
  async(_, thunkAPI) =>{
    try{
      return await entityService.getEntity();
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
// get singleEntity
export const getSingleEntity = createAsyncThunk(
  'entity/getSingleEntity',
  async(id, thunkAPI) => {
    try{
     return await entityService.getSingleEntity(id);
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
// update the Entity
export const updateEntity = createAsyncThunk(
  'entity/updateEntity', 
  async({id, formData}, thunkAPI) => {
    try{
    return await entityService.updateEntity(id, formData);
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

const entitySlice = createSlice({
  name : "entity",
  initialState,
  reducers : {
    reset : (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEntity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEntity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.entities.push(action.payload);
        toast.success("Entity added successfully");
      })
      .addCase(createEntity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllEntity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEntity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.entities = action.payload;
      })
      .addCase(getAllEntity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteEntity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEntity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Entity deleted successfully");
      })
      .addCase(deleteEntity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getSingleEntity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleEntity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.entities = action.payload;
      })
      .addCase(getSingleEntity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateEntity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEntity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Entity updated successfully");
      })
      .addCase(updateEntity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
    }
})

export const selectEntity = (state) => state.entity.entity;
export const {reset} = entitySlice.actions;
export default entitySlice.reducer