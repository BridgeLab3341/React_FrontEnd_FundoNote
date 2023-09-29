
import axios from 'axios';

export const Login = async(obj)=>{

    const response =await axios.post("https://localhost:44381/api/User/Login",obj);
    console.log("signIn api ",response);
    return response;
};

export const Register=async(obj)=>{
    let response =await axios.post("https://localhost:44381/api/User/Register",obj);
    console.log("signup api ",response);
    return response;
};


