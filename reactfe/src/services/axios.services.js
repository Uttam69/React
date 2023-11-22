import axiosInstance from "../config/axios"
let headers= {};

const getHeaders = (is_strict, form_data) =>{
    if(is_strict){
        let token ="";
        headers["authorization"] = "bearer"+token;  
    }
    if(form_data){
        headers["content-type"] = "multipart/form-data"
    }
}

export const httpPostRequest = (url, data, is_strict=false, form_data=false) =>{
    getHeaders(is_strict, form_data);

    axiosInstance.post(url, data, 
        {headers:{...headers}}
        )
}