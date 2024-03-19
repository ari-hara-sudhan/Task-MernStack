import { RegisterForm } from "./pages/Register";

const API_BASE_URL =import.meta.env.VITE_API_BASE

export const register = async (formData : RegisterForm)=>{

    const response = await fetch (`${API_BASE_URL}/api/users/register`,{
        method:'POST',
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify(formData)
    })


    const responseBody = await response.json();

    if(!response){
        throw new Error(responseBody.message)
    }
}

export const validateToken = async() =>{
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:"include"
    })


    if(!response.ok){
        console.log("response")
        throw new Error("Token Invalid")
       
    }

    return response.json();
}