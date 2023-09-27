import axios from "axios";
import React,{useEffect,useState} from "react";

export const NoteCreate=(obj)=>{

    let response=axios.post("https://localhost:44381/api/Note/AddNote",
    obj,
    )
    console.log(response);
    return response;
}

export const GetAllNotes = ()=>{
    let response = axios.get("https://localhost:44381/api/Note/GetAllNotes",
    )
    return response;
}