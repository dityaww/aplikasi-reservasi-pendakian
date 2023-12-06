import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import registerReducer from "./Auth/registerSlice";
import usersReducer from "./Auth/usersSlice";
import allpostReducer from "./Content/allpostSlice"
import searchdatauserReducer from "./Search/searchdatauserSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registerReducer,
    users: usersReducer,
    allpost: allpostReducer,
    searchdata: searchdatauserReducer
  },
});
