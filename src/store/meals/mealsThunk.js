import { createAsyncThunk } from "@reduxjs/toolkit"
import { editMealRequest, getMealRequest, postMealRequest, deleteMealRequest } from "../../api/mealService"

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getMealRequest()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postMeals = createAsyncThunk(
    'meals/postMeals',
    async (newMeal, { dispatch, rejectWithValue }) => {
        try {
            await postMealRequest(newMeal)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateMeals = createAsyncThunk(
    'meals/editMeals',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            await editMealRequest(data)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteMeals = createAsyncThunk(
    'meals/deleteMeals',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteMealRequest(id)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)