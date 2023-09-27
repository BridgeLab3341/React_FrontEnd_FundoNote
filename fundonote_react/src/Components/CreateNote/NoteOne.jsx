import { Box, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import TakeNoteTwo from "./NoteTwo";
import { BrushOutlined, CheckBoxOutlined, ChecklistOutlined, ImageOutlined } from '@mui/icons-material';

export default function NoteOne({handleToggel}) {


    return(
        <Box sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center', '& > :not(style)': {
              m: 1,
              width: '50vw',
              height: '70%',
            },
            paddingTop:'70px',
          }}
        >
         <Paper elevation={3} onClick={handleToggel}>
                <div
                style={{
                    cursor: 'text',
                    margin: '1ch',
                    color: 'grey',
                    fontSize: '2ch',
                    display:'flex',
                    justifyContent:'space-between',
      
                  }}
                >
                    Take a Note...
                    <div style={{display:'flex', justifyContent:'space-between',rowGap: '0.5px'}}>
                    <CheckBoxOutlined style={{marginRight:'3ch'}}/>
                    <BrushOutlined style={{marginRight:'3ch'}}/>
                    <ImageOutlined/>
                 </div>
                </div>
            

            </Paper> 
                  
        </Box>
    );
};
