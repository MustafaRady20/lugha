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
        reomveFromFavs: (state, id) => {
            state.favsList = state.favsList.filter((item) => item.entryId !== id)
        },
        emptyFavs: (state) => {
            state.favsList = []
        }

    },
})



export const { addToFav, reomveFromFavs, emptyFavs } = favSlice.actions
export default favSlice.reducer