import { mealsSlice } from './meals/mealsSlice'
import { basketSlice } from './basket/basketSlice'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './ui/uiSlice'
import authSlice from './auth/authSlice'
import { ordersSlice } from './orders/ordersSlice'

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
    basket: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [ordersSlice.name]: ordersSlice.reducer
  }
})

export default store