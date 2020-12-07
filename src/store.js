import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../src/features/counter/userSlice";
import appReducer from "../src/features/counter/appSlice"

export default configureStore({
    reducer:{
        user:userReducer,
        app:appReducer,
    },
});
