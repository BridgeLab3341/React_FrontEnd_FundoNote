import React from "react";
import axios from "axios";
import CreateNote from "../Components/CreateNote/NoteThree";

export const signIn = (obj)=>{
    let response = axios.post('https://localhost:44381/api/User/Login',obj);
    console.log(response);
    return response;
};

export const SignUp=async(obj)=>{
    let response =await axios.post('https://localhost:44381/api/User/Register',obj);
    return response;
}
