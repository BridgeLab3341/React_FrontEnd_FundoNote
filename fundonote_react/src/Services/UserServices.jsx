import React from "react";
import axios from "axios";

export const signIn = (obj)=>{
    let response = axios.post('https://localhost:44381/api/User/Login',obj);
    console.log(response);
    return response;
};

export const signUp=(obj)=>{
    let response = axios.post('https://localhost:44381/api/User/Register',obj);
    return response;
}
