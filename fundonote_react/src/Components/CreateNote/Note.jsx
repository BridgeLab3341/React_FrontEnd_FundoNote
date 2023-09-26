import { Paper } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, More, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import { sendDataNote } from '../../Services/UserServices';

export default function CreateNote() {
    const [edit,setedit]=useState(false);
    const[note,setnote]=useState({Title:'',TakeNote:''});

    // const [cursor,setcursor]=React.useState(false);
    const [close,setClose]=React.useState(false)

    const checkEdit =(e)=>{
        const value=e.target.value;
        setnote({...note,Title:value});
    }

    const handlesubmit=()=>{
        setClose(true)
    }
      
    const handleInputBlur = () => {
        setedit(true);
    };
    
    return( 
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:"30px",
        paddingTop:"18px",
        
      }}
    >
        <Paper
        sx={{
          width:'70ch',    
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: '15ch',
          borderRadius:'10px',
          boxShadow: '2px 2px 2px 2px rgba(1, 1, 1, 0.3)', 
          border: 'none',
          height:'25ch'
         }}
        > 
        <div style={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '10px', // Add some margin for spacing
          }}>
        <TextField
          variant='standard'
          placeholder="Title..."
          value={edit.Title}
          onChange={checkEdit}
          onBlur={handleInputBlur}
          InputProps=
          {{disableUnderline:'true',
            style: {
              border: 'none', 
              outline: 'none', 
              width: '100%', 
              textDecoration: 'none',
            },
          }}
          />
          <IconButton aria-label="Pin Note">
           <PushPinOutlined />
          </IconButton>
          </div>
          <TextField
            multiline
            variant='standard'
            placeholder="Take a note..."
            value={edit.takeaNote}
            onChange={checkEdit}
            onBlur={handleInputBlur}
            InputProps={{
              disableUnderline:'true',
              style: {
                border: 'none', 
                outline: 'none', 
                width: '100%', 
              },
            }}
            />
             <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                rowGap: '0.5px',
              }}
            >
              <IconButton aria-label="Add Notification">
                <NotificationAddOutlined />
              </IconButton>
              <IconButton aria-label="Color">
                <ColorLensOutlined />
              </IconButton>
              <IconButton aria-label="Image">
                <ImageOutlined />
              </IconButton>
              <IconButton aria-label="Archive">
                <ArchiveOutlined/>
              </IconButton>
              <IconButton aria-label="More Options">
                <MoreVertOutlined />
              </IconButton>
              <IconButton aria-label="Undo">
                <UndoOutlined/>
              </IconButton>
              <IconButton aria-label="Redo">
                <RedoOutlined/>
              </IconButton>
  
              <Button 
                type="submit" onClick={handlesubmit} 
                style={{ border: 'none', backgroundColor: 'none', color:'grey', textTransform:'lowercase', fontWeight:'bolder' }}              
              >
                Close
              </Button>
            </div>
            
          </Paper>
    </Box>   
    );
}