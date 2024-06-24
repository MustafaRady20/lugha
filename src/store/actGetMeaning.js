import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit'

const getMeaning = createAsyncThunk("actGetMeaing", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const response = await axios.get(`http://localhost:8080/lugha/${data.data}?username=${data.username}`)
        return response.data.pageProps
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        }
        else {
            return rejectWithValue("An unexpected Error ...!")
        }
    }
})

export default getMeaning