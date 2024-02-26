import {configureStore} from "@reduxjs/toolkit";
import {authSlices} from "./features/auth/authSlice";
import {postSlice} from "./post/postSlice";

export const store = configureStore({
    reducer:{
        auth:authSlices.reducer,
        post:postSlice.reducer
    }
})