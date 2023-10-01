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

export default function NoteThree({data}) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'row',
                padding:'35px',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    // height: 300,
                },
            }}
        >
            <div>
                <Paper elevation={3}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'5px'}}  className='displaytitle'>
                        <div>
                            {data.title}
                        </div>
                        <div>
                            <IconButton ><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div style={{display:'flex', padding:'5px'}} className='displaynote'> 
                        {data.description}
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'5px'}} className='displayicons'>
                        <div className='NotifiIcon'><IconButton ><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div className='PersonIcon'><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div className='PaletIcon'><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        <div className='ArchIcon'><IconButton ><ArchiveOutlinedIcon /></IconButton></div>
                        <div className='DeleteIcon'><IconButton><DeleteOutlinedIcon  /></IconButton></div>
                        <div className='MoreIcon'><IconButton><MoreVertOutlinedIcon /></IconButton></div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
}