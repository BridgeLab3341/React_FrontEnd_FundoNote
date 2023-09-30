import axios from "axios";

const JWTToken = localStorage.getItem("token");
console.log(JWTToken);

export const NoteCreate=async(obj)=>{
    console.log("Object", obj);
    let response=await axios.post("https://localhost:44381/api/Note/AddNote",obj,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    //console.log(response);
    return response;
}

export const GetAllNotes = async()=>{
    let response =await axios.get("https://localhost:44381/api/Note/GetAllNotes",{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    return response;
}
