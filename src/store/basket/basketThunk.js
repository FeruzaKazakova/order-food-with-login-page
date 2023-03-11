import { createAsyncThunk } from '@reduxjs/toolkit'
import { addToBasketRequest, deleteBasketItemRequest, getBasketRequest, updateBasketItemRequest } from '../../api/itemService'
import { fetchApi } from '../../lib/fetchApi'

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getBasketRequest()
            return data.data.items
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const addToBasket = createAsyncThunk(
    'basket/addNewBasket',
    async (newItem, { dispatch, rejectWithValue }) => {
        try {
            await addToBasketRequest(newItem)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const updateBasketItem = createAsyncThunk(
    'basket/updateBasket',
    async ({ id, amount }, { dispatch, rejectWithValue }) => {
        try {
            await updateBasketItemRequest(id, amount)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const deleteBasketItem = createAsyncThunk(
    'basket/deleteBasket',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteBasketItemRequest(id)
            dispatch(getBasket())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const submitOrder = createAsyncThunk(
    'basket/submitOrder',
    async ({ orderData }, { dispatch, rejectWithValue }) => {
        try {
            await fetchApi(`https://jsonplaceholder.typicode.com/postssad`, {
                method: 'POST',
                body: orderData,
            })
            return dispatch(getBasket())
        } catch (error) {
            return rejectWithValue('Smth went wrong')
        }
    }
)
