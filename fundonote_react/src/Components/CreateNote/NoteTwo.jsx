import React, { useEffect, useState } from "react";
import { sendDataNote } from "../../Services/UserServices";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, More, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, Title, UndoOutlined } from '@mui/icons-material';
import { NoteCreate } from "../../Services/NoteServices";


export default function TakeNoteTwo({ handleToggel }) {

  const [input, setInput] = useState({ Title: '', Description: '', BGColor:'',Archive:'',Remainder:'',Pin:'',Trash:'',CreatedTime:'',UpdatedTime:''});

  const [isArchive, setisArchive]=useState(false);

  const handleIsArchive=(a)=>{
    const value=a.target.value;
    setisArchive({...isArchive,Title:value})
  }

  const handleTitle = (e) => {
    const value = e.target.value;
    setInput({ ...input, Title: value },[Title]);
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setInput({ ...input, Description: value },[]);
  };

  const handleClose = (e) => {
    handleToggel(true)
    console.log(input);
    console.log("note added")
    if (input != null && input.Title != "" && input.Description !="") {
      let response = NoteCreate(input)
      console.log(response);
    }
  }
  console.log(input);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      Width: "30vw",
      height: "20vh",
      paddingTop: '50px',
    }}
    >
      <Paper
        sx={{
          width: '50%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '10px',
          borderRadius: '10px',
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
            value={input.Title}
            onChange={handleTitle}
            InputProps=
            {{
              disableUnderline: 'true',
              style: {
                border: 'none',
                outline: 'none',
                width: '100%',
                textDecoration: 'none',
              },
            }}
          /><IconButton aria-label="pin Note">
            <PushPinOutlined />
          </IconButton>
        </div>
        <TextField
          multiline
          variant='standard'
          placeholder="Take a note..."
          value={input.Takenote}
          onChange={handleDescription}
          InputProps={{
            disableUnderline: 'true',
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
            alignItems: 'start',
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
          <IconButton aria-label="Archive" onClick={handleIsArchive}>
            <ArchiveOutlined />
          </IconButton>
          <IconButton aria-label="More Options">
            <MoreVertOutlined />
          </IconButton>
          <IconButton aria-label="Undo">
            <UndoOutlined />
          </IconButton>
          <IconButton aria-label="Redo">
            <RedoOutlined />
          </IconButton>

          <Button
            type="submit" onClick={handleClose}
            style={{ border: 'none', backgroundColor: 'none', color: 'grey', textTransform: 'lowercase', fontWeight: 'bolder' }}
          >Close</Button>
        </div>
      </Paper>
    </Box>
  );
}
