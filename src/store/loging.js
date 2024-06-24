import { createSlice } from "@reduxjs/toolkit";
import actLogin from "./actLogin"

const loggingSlice = createSlice({
    name: "Login",
    initialState: {
        username: "",
        loggedIn: false

    },
    reducers: {

        logOut: (state) => {
            state.loggedIn = false;
            state.username = ""
        }
    },
    extraReducers: (buidler) => {
        buidler.addCase(actLogin.rejected, (state) => {
            state.loggedIn = false;
            alert("Check you data and login again")
        });
        buidler.addCase(actLogin.fulfilled, (state, action) => {
            console.log("success")
            state.loggedIn = true;
            state.username = action.payload;
        })
    }

})

export { actLogin }
export const { logIn, logOut } = loggingSlice.actions
export default loggingSlice.reducer