import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS, UserRoles } from "../../constants/common";
import { signIn, signUp, signOut } from "./authThunk"

const getInitialState = () => {
    const jsonData = localStorage.getItem(STORAGE_KEYS.AUTH)
    if(jsonData){
        const userData = JSON.parse(jsonData)
        return {
            isAuthorized: true, 
            token: userData.token,
            user: {
                name: userData.user.name,
                email: userData.user.email,
                role: userData.user.role
            }
        }
    }
    return {
        isAuthorized: false,
        token: '',
        user: {
            name: '',
            email: '',
            role: UserRoles.GUEST
        }
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, {payload}) => {
            state.isAuthorized = true
            state.token = payload.token

            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.isAuthorized = true
            state.token = payload.token

            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signOut.fulfilled, (state) => {
            state.isAuthorized = false
            state.token = ''

            state.user = {
                name: '',
                email: '',
                role: UserRoles.GUEST,
            }
        })
    }
})

export default authSlice