import React, { useEffect, useState } from 'react';
import SearchAppBar from '../MainPage/header';
import MiniDrawer from '../MainPage/navdrawer';
import NoteOne from '../Components/CreateNote/NoteOne';
import TakeNoteTwo from '../Components/CreateNote/NoteTwo';
import NoteThree from '../Components/CreateNote/NoteThree';
import { GetAllNotes } from '../Services/NoteServices';

export default function Dashboard() {

    const [item, setItem] = useState(false);
    const menuToggel = () => {
        setItem(!item)
    }

    const [toggle, setToggle] = useState(true);
    const handleToggel = () => {
        setToggle(!toggle)
    };

    const [posts, setPosts] = useState([]);
    
    async function getAllNotesResponse() {
        let response = await GetAllNotes();
        console.log(response.data.data)
        console.log("data Fetched")
        setPosts(response.data.data)
        
    }

    useEffect(() => {
        getAllNotesResponse()
    },[])
    return (
        <div>
            <SearchAppBar item={item} setItem={menuToggel} />
            <MiniDrawer item={item} />
            {
                toggle ? <NoteOne handleToggel={handleToggel} /> : <TakeNoteTwo handleToggel={handleToggel} />
            }
            { 
                //   posts.map((data) => (<NoteThree key={data.id} data={data}/>))  
                  posts.map((data) => (<NoteThree data={data} getAllNotesResponse={getAllNotesResponse}/>))      
                
            }
        </div>
    )
}