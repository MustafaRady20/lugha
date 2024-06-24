// import { createSlice } from "@reduxjs/toolkit";
// import actGetFavs from "./actGetFavs"

// const favsSlice = createSlice({
//     name: "favs",
//     initialState: {
//         favsList: [],
//         loading: "idle"
//     },
//     reducers: {
//         cleanPrevData: (state) => {
//             state.favsList = []
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(actGetFavs.pending, (state) => {

//             state.loading = "pending"
//         });
//         builder.addCase(actGetFavs.fulfilled, (state, action) => {

//             state.loading = "success";
//             state.favsList = action.payload
//         });
//         builder.addCase(actGetFavs.rejected, (state) => {
//             state.loading = "faild"
//         })

//     }

// })



// export const { cleanPrevData } = favsSlice.actions

// export { actGetFavs }
// export default favsSlice.reducer