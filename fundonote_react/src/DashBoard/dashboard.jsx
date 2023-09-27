import React, { useState } from 'react';
import SearchAppBar from '../MainPage/header';
import MiniDrawer from '../MainPage/navdrawer';
import CreateNote from '../Components/CreateNote/NoteThree';
import NoteOne from '../Components/CreateNote/NoteOne';
import TakeNoteTwo from '../Components/CreateNote/NoteTwo';

export default function Dashboard(){

    const[menuToggle,setmenuToggle]=useState(false);
    const handleDrawer=()=>{
        setmenuToggle(!menuToggle)
    }

    const[toggle,setToggle]=useState(true);
    const handleToggel=()=>{
        setToggle(!toggle)
    };

    return (
        <div>
            <SearchAppBar />
            <MiniDrawer handleDrawer={handleDrawer}/>
            {
                toggle ? <NoteOne handleToggel={handleToggel}/> : <TakeNoteTwo handleToggel={handleToggel}/>

            }
            
        </div>
    )
}