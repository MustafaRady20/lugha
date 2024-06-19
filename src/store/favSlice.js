import { createSlice } from "@reduxjs/toolkit";


export const favSlice = createSlice({
    name: "favs",
    initialState: {
        favsWords: []
    },
    reducers: {
        addToFav: (state, action) => {
            state.favsWords.push(action.payload)

        },
        removeFromFav: (state, action) => {
            state.favsWords = state.favsWords.filter((item) => { return item.id !== action.payload })

        }
    }
})

export const { addToFav, removeFromFav } = favSlice.actions

export default favSlice.reducer