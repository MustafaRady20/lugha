import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";
import meaningSlice from "./meaningSlice";
import loggingSlice from "./loging"
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "roor",
    storage
}


const reducers = combineReducers({ favs: favSlice, meaning: meaningSlice, login: loggingSlice })


const persistedReducer = persistReducer(persistConfig, reducers)




const store = configureStore({
    reducer: persistedReducer
})

export default store