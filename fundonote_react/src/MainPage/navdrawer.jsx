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
import { DeleteNote } from '../Services/NoteServices';



export default function MiniDrawer({item}){

  const [openDialog, setOpenDialog] = React.useState(false);

 const handleOpenDailog=()=>{
    setOpenDialog(true);
  };

  const handleCloseDailog=()=>{
    setOpenDialog(false)
  }

  const handleDeletePermently=async()=>{
    try{
      let response=await DeleteNote();
      console.log("Deleted permently")  
      console.log(response);
      handleOpenDailog();
    } catch (error){
      console.error(error.message);
    }
  };


  const drawerWidth = 240;

  const drawerStyles={
    width:item? drawerWidth:'60px',
    flexShrink:0,
    whiteSpace:'nowrap',
    transition:'width 0.3s',
    marginTop:'70px'
  };

  return(
    <Drawer variant='permanent' open={item} PaperProps={{style:drawerStyles}}>
      <List>
        <ListItem>
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

        <ListItem>
          <ListItemIcon>
            <ArchiveIcon/>
          </ListItemIcon>
          <ListItemText primary="Archive"/>
        </ListItem>

        <ListItem>
          <ListItemIcon  onClick={handleDeletePermently}>
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText primary="Bin"/>
        </ListItem> 
      </List>
    </Drawer>
  )
}
