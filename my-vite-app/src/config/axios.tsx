import axios,{AxiosInstance} from 'axios';


export const axiosInstance:AxiosInstance =axios.create({
    baseURL :" https://culture-connect.onrender.com/api",
    headers :{
        "Content-Type": "application/json",
    },
     withCredentials: true,
})