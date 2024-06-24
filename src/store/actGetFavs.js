import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit'

const getFavs = createAsyncThunk("actGetMeaing", async (username, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const response = await axios.get(`http://localhost:8080/favorites/${username}`)
        console.log(response)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        }
        else {
            return rejectWithValue("An unexpected Error ...!")
        }
    }
})

export default getFavs