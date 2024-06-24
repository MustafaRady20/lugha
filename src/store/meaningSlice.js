import { createSlice } from "@reduxjs/toolkit";
import actGetMeaning from "./actGetMeaning"
const meaning = createSlice({
    name: "meaning",
    initialState: {
        loading: "idle",
        data: []
    },
    reducers: {
        cleanPrevData: (state) => {
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetMeaning.pending, (state) => {
            
            state.loading = "pending"
        });
        builder.addCase(actGetMeaning.fulfilled, (state, action) => {
            console.log("success")
            state.loading = "success";
            state.data = action.payload
        });
        builder.addCase(actGetMeaning.rejected, (state) => {
            
            state.loading = "faild"
        })

    }

})



export const { cleanPrevData } = meaning.actions

export { actGetMeaning }
export default meaning.reducer