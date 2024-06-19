import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";



const store = configureStore({
    reducer: { favs: favSlice }
})

export default store