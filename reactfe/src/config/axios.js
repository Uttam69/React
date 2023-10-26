import axios from "axios";
const axiosInstance = axios.create({
    baseURL : "",
    timeout: 3000,
    timeoutErrorMessage: "Server Timed Out",
    headers: {
        "content-type": "application/json"
    }
});
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("InterCeptMessage: ", response)
        return response.data;
    },
    (error)=>{
        console.log("InterCeptMessage: ", error)
    }
)
