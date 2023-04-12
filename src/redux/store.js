import { configureStore } from "@reduxjs/toolkit";
import entityReducer from "./entity/entitySlice"
import clientReducer from "./client/clientSlice"
import engageReducer from "./engage/engageSlice"
import userReducer from "./userid/userSlice"
export const store = configureStore({
  reducer : {
    entity : entityReducer,
    client : clientReducer,
    enage : engageReducer,
     user : userReducer
  }
})