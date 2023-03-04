import { createSlice } from '@reduxjs/toolkit'
import getMeals from './mealsThunk'

const initialState = {
    meals: [],
    isLoading: false,
    error: '',
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        getMealsStarted(state) {
            state.isLoading = true
        },
        getMealsSuccess(state, action) {
            state.meals = action.payload
            state.isLoading = false
            state.error = ''
        },
        getMealsFailed(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMeals.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getMeals.pending, (state, action) => {
            state.isLoading = true
            state.error = action.payload
        })
        builder.addCase(getMeals.rejected, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const mealsActions = mealsSlice.actions
