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

export default function NoteThree({input}) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
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
                    <div className='displaytitle'>
                        <div>
                            {input.title}
                        </div>
                        <div>
                            <IconButton ><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div className='displaynote'>
                        {input.Description}
                    </div>
                    <div className='displayicons'>
                        <div><IconButton ><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        <div><IconButton><MoreVertOutlinedIcon /></IconButton></div>
                        <div><IconButton ><ArchiveOutlinedIcon /></IconButton></div>
                        <div><IconButton><DeleteOutlinedIcon  /></IconButton></div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
}