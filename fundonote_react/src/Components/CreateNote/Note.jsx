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

    const [cursor,setcursor]=React.useState(false);
    const [close,setClose]=React.useState(true)


    const checkCursor =()=>{
        setcursor(true);
    };

    const checkClick=()=>{
        setedit(true);
    };
    
    const checkFirstEdit= (e)=>{
        const value=e.target.value;
        setnote({...note,Title:value});
    }

    const checkSecondEdit =(e)=>{
        const value=e.target.value;
        setnote({...note,Title:value});
    }

    const handlesubmit=()=>{
        setClose(false)
    }
      
    const handleInputBlur = () => {
        setedit(true);
    };
    
    const handleClose=async(event)=>{
        //handlesubmit();
        console.log(true);
        const token=localStorage.getItem('token')
        console.log(token);
        let response=await sendDataNote(edit, token)
        console.log(response);    
    }

    return( 
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
        <Paper
        sx={{
          width:'80ch',
      

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: '1ch',
          borderRadius:'10px',
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', // Add a thicker box shadow here
          border: 'none',// Remove the border from the Paper
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
          onChange={checkSecondEdit}
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

          /><IconButton aria-label="Pin Note">
          <PushPinOutlined />
        </IconButton>
          </div>
          <TextField
            multiline
            variant='standard'
            placeholder="Take a note..."
            value={edit.takeaNote}
            onChange={checkSecondEdit}
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
                type="submit" onClick={handleClose} 
                style={{ border: 'none', backgroundColor: 'none', color:'grey', textTransform:'lowercase', fontWeight:'bolder' }}
                
              >
                Close
              </Button>
            </div>
            
          </Paper>
    </Box>   
    );
}