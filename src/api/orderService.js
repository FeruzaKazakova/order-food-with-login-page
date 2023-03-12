import axiosInstance from "../config/mealInstence"

export const getOrderRequest = () => {
    return axiosInstance.get('/orders')
}

export const postOrderRequest = (price) => {
    return axiosInstance.post('/orders', price)
}

export const getAllOrdersRequest = () => {
    return axiosInstance.get('/orders/all')
}