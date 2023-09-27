import React, { useState } from "react";
import { sendDataNote } from "../../Services/UserServices";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, More, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';


export default function TakeNoteTwo({handleToggel}){
    const[edit,setEdit]=useState(false);
    const[input,setInput]=useState({title:'',takenote:''});

    const handleInputchange1=(e)=>{
        const value=e.target.value;
        setInput({...input,title:value});
    };

    const handleInputChange2 = (e) => {
        const value=e.target.value;
        setInput({...input, takeaNote:value});
    };

    const handleClose=()=>{
        console.log(true);
        const token=localStorage.getItem('token')
        console.log(token);
        // let response=await sendDataNote(input,token)
        // console.log(response)
    }

    return(
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            Width:"30vw",
            height:"20vh",
            paddingTop:'50px',    
        }}
        >
            <Paper
             sx={{
                width:'50%',
                height:'80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'space-between',
                padding:'10px',
                borderRadius:'10px',
                boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.3)', // Add a thicker box shadow here
                border: 'none',// Remove the border from the Paper
            }}            
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'start', 
                     justifyContent: 'space-between',
                    // marginBottom: '10px', 
                }}>
                    <TextField
                     variant='standard'
                     placeholder="Title..."
                     value={input.title}
                     onChange={handleInputchange1}
                     InputProps=
                     {{disableUnderline:'true',
                        style: {
                        border: 'none', 
                        outline: 'none', 
                        width: '100%', 
                        textDecoration: 'none',
                        },
                     }}
                    /><IconButton aria-label="pin Note">
                        <PushPinOutlined/>
                    </IconButton>
                </div>
                <TextField
                multiline
                variant='standard'
                placeholder="Take a note..."
                value={input.takeaNote}
                onChange={handleInputChange2}
                InputProps={{
                disableUnderline:'true',
                style: {
                border: 'none', 
                outline: 'none', 
                width: '60%',
                },
           }}
            />
            <div
            style={{
                display: 'flex',
                alignItems:'start',
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
          style={{border: 'none', backgroundColor: 'none', color:'grey', textTransform:'lowercase', fontWeight:'bolder' }}
          >Close</Button>
            </div>
            </Paper>
        </Box>
    );
}
