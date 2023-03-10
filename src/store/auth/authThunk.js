import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/authService";
import { STORAGE_KEYS } from "../../constants/common";

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, { rejectWithValue }) => {
        try{
            const {data} = await authService.signUp(payload)
            const userData = data.data
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
            return userData
        }catch(error){
            return rejectWithValue(error)
        }
    }
)

export const signIn = createAsyncThunk(
    'auth/signin',
    async (payload, { rejectWithValue }) => {
        try{
            const {data} = await authService.signIn(payload)
            const userData = data.data
            localStorage.getItem(STORAGE_KEYS.AUTH)
            return userData
        }catch(error){
            return rejectWithValue(error)
        }
    }
)