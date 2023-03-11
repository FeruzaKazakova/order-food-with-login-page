import axios from "axios"
import store from "../store"
import { signOut } from "../store/auth/authThunk"

const BASE_URL ='http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

axiosInstance.interceptors.request.use(
    function(config){
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: store.getState().auth.token,
            }
        }
        return newConfig
    },
    function(error){
        return error
    }
)

axiosInstance.interceptors.request.use(
    function(response){
        return response
    },
    function(error){
        if(error.status === 401){
            store.dispatch(signOut())
        }
        return error
    }
)

export default axiosInstance