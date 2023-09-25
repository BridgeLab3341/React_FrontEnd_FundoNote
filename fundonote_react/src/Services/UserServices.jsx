import axios from "axios";

export const SignIn = async(obj)=>{
    let response =await axios.post('https://localhost:44371/api/User/login',obj);
    return response;
};

export const SignUp=async(obj)=>{
    let response =await axios.post('https://localhost:44371/api/User/Register',obj);
    return response;
}