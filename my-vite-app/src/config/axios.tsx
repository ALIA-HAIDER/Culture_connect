import axios,{AxiosInstance} from 'axios';


export const axiosInstance:AxiosInstance =axios.create({
    baseURL :" http://localhost:4500/api",
    headers :{
        "Content-Type": "application/json",
    },
     withCredentials: true,
})