import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Paper } from "@mui/material";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsPausedOutlinedIcon from '@mui/icons-material/NotificationsPausedOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { ArchiveNote, DeleteNote, TrashNote } from '../../Services/NoteServices';
import './NoteStyles.css'

export default function NoteThree({ data, getAllNotesResponse }) {

    const handleArchive = async (id) => {
        let archivedObj = {
            noteId: id,
        };
        console.log(archivedObj);
        try {
            const response = await ArchiveNote(archivedObj);
            console.log(response);
            getAllNotesResponse(data); // Refresh notes after archiving
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleTrashNote = async (id) => {
        let trashObj = {
            noteId: id,
        };
        console.log(trashObj);
        try {
            const response = await TrashNote(trashObj);
            console.log(response);
            getAllNotesResponse(data); // Refresh notes after trashing
        } catch (error) {
            console.error(error.message);
        }
    }
    
    const handleDeleteTrash=async(id)=>{
        let deleteobj={
            noteId:id,
        };
        console.log(deleteobj);
        try{
            const response=await DeleteNote(deleteobj);
            console.log(response);
            getAllNotesResponse(data);
        }catch(error){
            console.error(error.message);
        }
    }

    return (
        
        <Box className="Note3Box"
            sx={{
                 display: 'flex',
                 justifyContent:'center',
                //  flexDirection: 'row',
                flexWrap:'wrap',
                padding: '35px',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                },
            }}
        >
            <div>
                <Paper elevation={3}>
                    <div  className='displaytitle'>
                        <div>
                            {data.title}
                        </div>
                        <div>
                            <IconButton ><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div  className='displaynote'>
                        {data.description}
                    </div>
                    <div className='displayicons'>
                        <div className='NotifiIcon'><IconButton ><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div className='PersonIcon'><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div className='PaletIcon'><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        <div className='ArchIcon'><IconButton onClick={() => handleArchive(data.noteId)} ><ArchiveOutlinedIcon /></IconButton></div>
                        <div className='DeleteIcon'><IconButton onClick={() =>{data.trash ===true ? handleDeleteTrash(data.noteId) : handleTrashNote(data.noteId)}} ><DeleteOutlinedIcon /></IconButton></div>
                        <div className='MoreIcon'><IconButton ><MoreVertOutlinedIcon /></IconButton></div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
}