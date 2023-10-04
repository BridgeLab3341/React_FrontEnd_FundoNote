import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LabelIcon from '@mui/icons-material/Label';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';



export default function NavDrawer({ item,setNoteOption}) {

  const drawerWidth = 180;

  const drawerStyles = {
    width: item ? drawerWidth : '60px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s',
    marginTop: '70px'
  };

  const selectOption=(option)=>{
    setNoteOption(option);
  }
  


  return(
    <Drawer variant='permanent' open={item} PaperProps={{style:drawerStyles}}>
      <List>
        <ListItem  onClick={()=>selectOption("Notes")}>
          <ListItemIcon>
            <LightbulbIcon/>
          </ListItemIcon>
          <ListItemText primary="Notes"/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Remainder"/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
          <ListItemText primary="Edit"/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LabelIcon/>
          </ListItemIcon>
          <ListItemText primary="Label"/>
        </ListItem>

        <ListItem onClick={()=>selectOption("archive")}>
          <ListItemIcon>
            <ArchiveIcon/>
          </ListItemIcon>
          <ListItemText primary="Archive"/>
        </ListItem>

        <ListItem onClick={()=>selectOption("trash")}>
          <ListItemIcon >
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText  primary="Bin"/>
        </ListItem> 
      </List>
    
      </Drawer>
  )
}