import axiosInstance from '../config/mealInstence'

export const getMealRequest = () => {
    return axiosInstance.get('/foods')
}

export const postMealRequest = (newMeal) => {
    return axiosInstance.post('/foods', newMeal)
}

export const editMealRequest = ( data) => {
    return axiosInstance.put(`/foods/${data.id}`, data.editData)
}

export const deleteMealRequest = (id) => {
    return axiosInstance.delete(`/foods/${id}`)
}

export const getMealReq = (id) => {
    return axiosInstance.get(`/foods/${id}`)
}