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

export default function NoteThree() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', '& > :not(style)': {
                    m: 1,
                    width: '50vw',
                    height: '70%',
                },
                paddingTop: '70px',
            }}
        >
            <div>
                <Paper elevation={3}>
                    <div className='displaytitle'>
                        <div>
                        </div>
                        <div>
                            <IconButton ><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div className='displaynote'>
                    </div>
                    <div className='displayicons'>
                        <div><IconButton ><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        <div><IconButton><MoreVertOutlinedIcon /></IconButton></div>
                    </div>

                </Paper>
            </div>
        </Box>
    );
}