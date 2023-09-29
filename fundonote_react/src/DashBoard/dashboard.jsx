import React, { useState } from 'react';
import SearchAppBar from '../MainPage/header';
import MiniDrawer from '../MainPage/navdrawer';
import CreateNote from '../Components/CreateNote/NoteThree';
import NoteOne from '../Components/CreateNote/NoteOne';
import TakeNoteTwo from '../Components/CreateNote/NoteTwo';
import NoteThree from '../Components/CreateNote/NoteThree';

export default function Dashboard() {

    const [item, setItem] = useState(false);
    const menuToggel = () => {
        setItem(!item)
    }

    const [toggle, setToggle] = useState(true);
    const handleToggel = () => {
        setToggle(!toggle)
    };

    return (
        <div>
            <SearchAppBar item={item} setItem={menuToggel} />
            <MiniDrawer item={item} />
            {
                toggle ? <NoteOne handleToggel={handleToggel} /> : <TakeNoteTwo handleToggel={handleToggel} />
            }
            {/* <NoteThree/> */}
        </div>
    )
}