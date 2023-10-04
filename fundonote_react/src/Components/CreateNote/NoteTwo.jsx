import React, { useState ,useEffect, useRef} from "react";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import { NoteCreate } from "../../Services/NoteServices";


export default function NoteTwo(props) {

  const [input, setInput] = useState({ title: '', description: '', bgColor: '',archive: false,trash: false});

  const { handleToggel,getAllNotesResponse }=props
  // Create a ref for the title input element
  // const titleInputRef= useRef(null);

  // useEffect(() => {
  //   const handleTitleInputChange = (e) => {
  //     const value = e.target.value;
  //     setInput({ ...input, title: value });
  //   };

  //   titleInputRef.current.addEventListener('input', handleTitleInputChange);

  //   return () => {
  //     titleInputRef.current.removeEventListener('input', handleTitleInputChange);
  //   };
  // }, [input]);
  
  //////////////////////
  const handleTitle = (e) => {
    const value = e.target.value;
    setInput({ ...input, title: value });
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setInput({ ...input, description: value });
  };

  const handleArchiveNote=(e)=>{
    input(prevState=>({
      ...prevState,
      archive:true,
    }))
    console.log("Note is Archived");
  }

  const handleClose = async() => {
    handleToggel(true)
    //console.log(input);
    console.log("input", getAllNotesResponse);
    if (input.title.trim() !== '' || input.description.trim() !== '') {
      const response =await NoteCreate(input)
      console.log(response);
      console.log("created note");
      getAllNotesResponse();
    }
    else{
      console.log("Title or description is empty")
    }
  }
  // console.log(input);

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
          alignItems: 'center',
          justifyContent: 'space-between',
          // marginBottom: '10px', 
        }}>
          <TextField
            variant='standard'
            placeholder="Title..."
            value={input.title}
            //inputRef={titleInputRef}
            onChange={handleTitle}
            InputProps=
            {{
              disableUnderline: 'true',
              style: {
                border: 'none',
                outline: 'none',
                width: '100%',
                textDecoration: 'none',
                display:'flex',
                alignItems:'center',
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
          value={input.description}
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
          <IconButton aria-label="Archive" onClick={handleArchiveNote}>
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
