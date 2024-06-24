import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loggin = createAsyncThunk("actLogin", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(data)
    try {
        const response = await axios.post("http://localhost:8080/login", data)
        console.log(response)
        return data.username
    } catch (error) {
        return rejectWithValue(error)
    }

})

export default loggin