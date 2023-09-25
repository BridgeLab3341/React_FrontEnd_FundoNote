import React from "react";
import axios from "axios";
import CreateNote from "../Components/CreateNote/Note";

export const SignIn = async(obj)=>{
    let response =await axios.post('https://localhost:44371/api/User/login',obj);
    return response;
};

export const SignUp=async(obj)=>{
    let response =await axios.post('https://localhost:44371/api/User/Register',obj);
    return response;
}
export const sendDataNote=async(obj, JWTToken)=>{
    console.log("Object",obj)
    let response=await axios.post('https://srifundoowebapp.azurewebsites.net/api/Notes/CreatingNote', obj, JWTToken,{
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000'
        }
    })
    .then(response => {
        return response;
    })
    .catch(error => {
       
    });
    
    console.log('trueresponse');
        // 'https://srifundoowebapp.azurewebsites.net/api/Notes/CreatingNote', obj, JWTToken)
   
}