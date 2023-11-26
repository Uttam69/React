import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://rapidapi.com",
    timeout: 30000,
    timeoutErrorMessage: "Server timed out",
    headers: {
        "Content-Type" : "application/json",
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'register73.p.rapidapi.com'
    }
})
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("InterceptResp:", response);
        return response.data;
    },
    (error)=>{
        console.log("InterceptError:", error)
    }
)
export default axiosInstance;