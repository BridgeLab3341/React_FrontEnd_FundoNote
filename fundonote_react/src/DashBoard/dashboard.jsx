import React, { useEffect, useState } from 'react';
import SearchAppBar from '../MainPage/header';
import MiniDrawer from '../MainPage/navdrawer';
import NoteOne from '../Components/CreateNote/NoteOne';
import TakeNoteTwo from '../Components/CreateNote/NoteTwo';
import NoteThree from '../Components/CreateNote/NoteThree';
import { GetAllNotes } from '../Services/NoteServices';

export default function Dashboard() {

    //search Bar
    const [item, setItem] = useState(false); //search bar 
    const menuToggel = () => {
        setItem(!item)
    }
    //Min Drawer and NoteOne NoteTwo toggle 
    const [toggle, setToggle] = useState(true);

    const handleToggel = () => {
        setToggle(!toggle)
    };

    const [noteOption, setNoteOption] = useState("Notes");
    //Fetch all Notes
    const [posts, setPosts] = useState([]);

    async function getAllNotesResponse() {

        try {
            let response = await GetAllNotes();
            console.log(response.data.data);
            let filterNote = [];
            if (noteOption === 'Notes') {
                filterNote = response.data.data.filter(note => note.archive == false && note.trash == false);
            } else if (noteOption === 'archive') {
                filterNote = response.data.data.filter(note => note.archive && !note.trash);
            } else if (noteOption === 'Bin') {
                filterNote = response.data.data.filter(note => note.trash);
            }
            setPosts(filterNote);
        } catch (error) {
            console.error('Error fetching notes:', error);
            // Handle the error, for example, show an error message to the user
        }
    };
    useEffect(() => {
        console.log("Data called")
        getAllNotesResponse()

        // const autoRefresh=()=>{
        //     getAllNotesResponse();
        // };
        // const refreshTimer = setInterval(autoRefresh, 60000);

        // return ()=>clearInterval(refreshTimer);
    }, []);
    // const autoRefresh=()=>{
    //     getAllNotesResponse()
    // }


    return (
        <div>
            <SearchAppBar item={item} setItem={menuToggel} />
            <MiniDrawer item={item} />
            {
                toggle ? <NoteOne handleToggel={handleToggel} /> : <TakeNoteTwo handleToggel={handleToggel} />
            }
            {
                //   posts.map((data) => (<NoteThree key={data.id} data={data}/>))  
                //posts.map((data) => (<NoteThree autoRefresh={autoRefresh} data={data} getAllNotesResponse={getAllNotesResponse}/>))      
                posts.map((data) => (<NoteThree key={data.id} data={data} getAllNotesResponse={getAllNotesResponse} />))
            }
        </div>
    )
}