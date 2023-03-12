import { createSlice } from "@reduxjs/toolkit"
import { getAllOrders, getOrders } from "./ordersThunk"

const initialState = {
    meals: [],
    allMeals: []
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled,(state, action) => {
            state.meals = action.payload
        })
        builder.addCase(getAllOrders.fulfilled,(state, action) => {
            state.allMeals = action.payload
        })
    }
})

export const ordersActions = ordersSlice.actions