import React, { useEffect, useState } from 'react';
import Header from '../MainPage/header';
import NavDrawer from '../MainPage/navdrawer';
import NoteOne from '../Components/CreateNote/NoteOne';
import NoteTwo from '../Components/CreateNote/NoteTwo';
import NoteThree from '../Components/CreateNote/NoteThree';
import { GetAllNotes } from '../Services/NoteServices';
import "./DashBoard.css"

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
    //
    // const listenDrawer=(options)=>{
    //     setNoteOption(options)
    // }

        //Fetch all Notes
    const [noteOption, setNoteOption] = useState("Notes");
    const [posts, setPosts] = useState([]);

    const getAllNotesResponse= async()=> {

            let response = await GetAllNotes();
            console.log(response.data.data);
            let filterNote = [];
            if (noteOption === 'Notes') {
                filterNote = response.data.data.filter(note => note.archive === false && note.trash === false);
                setPosts(filterNote);
            } else if (noteOption === 'archive') {
                filterNote = response.data.data.filter(note => note.archive === true && note.trash === false);
                setPosts(filterNote);
            } else if (noteOption === 'trash') {
                filterNote = response.data.data.filter(note => note.archive === false && note.trash === true);
                setPosts(filterNote);
            }
    };
    useEffect(() => {
        console.log("Data called")
        getAllNotesResponse()
    }, [noteOption]);
    console.log(noteOption)


    return (
        <div >
            <Header item={item} setItem={menuToggel} />
            <NavDrawer item={item}  setNoteOption={setNoteOption}/>
            {
                toggle ? <NoteOne handleToggel={handleToggel} /> : <NoteTwo handleToggel={handleToggel} getAllNotesResponse={getAllNotesResponse}/>
            }
            <div className='wrap'>
            {
                posts.map((data) => (<NoteThree key={data.id} data={data} getAllNotesResponse={getAllNotesResponse} />))
            }
            </div>
        </div>
    )
}