import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./ContactSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: {
        user: persistedReducer,
    }
});
