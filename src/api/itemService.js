import axiosInstance from "../config/mealInstence"

export const addToBasketRequest = (newItem) => {
    return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    }
    )
}

export const getBasketRequest = () => {
    return axiosInstance.get('/basket')
}

export const updateBasketItemRequest = (id, basketAmount) => {
    return axiosInstance.put(`/basketItem/${id}/update`, {
        amount: basketAmount,
    }
    )
}

export const deleteBasketItemRequest = (id) => {
    return axiosInstance.delete(`/basketItem/${id}/delete`)
}