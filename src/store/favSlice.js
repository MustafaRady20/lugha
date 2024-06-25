import { createSlice } from "@reduxjs/toolkit";


export const favSlice = createSlice({
    name: "favs",
    initialState: {
        favsList: []
    },
    reducers: {
        addToFav: (state, action) => {
            state.favsList.push(action.payload)
        },
        reomveFromFavs: (state, action) => {
            state.favsList = state.favsList.filter((item) => item.entryId !== action.payload)
        },
        emptyFavs: (state) => {
            state.favsList = []
        }

    },
})



export const { addToFav, reomveFromFavs, emptyFavs } = favSlice.actions
export default favSlice.reducer