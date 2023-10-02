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
import { ArchiveNote, DeleteNote, TrashNote } from '../Services/NoteServices';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



export default function MiniDrawer({ item, handleNoteUpdate }) {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDailog = () => {
    setOpenDialog(true);
  };

  const handleCloseDailog = () => {
    setOpenDialog(false)
  }

  const handleDeletePermently = async () => {
    try {
      let response = await DeleteNote();
      console.log("Deleted permently")
      console.log(response);
      handleNoteUpdate();
      handleCloseDailog();
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleArchivePer = async () => {
  //   try {
  //     let response = await ArchiveNote();
  //     console.log(response);
  //     handleNoteUpdate();
  //     handleCloseDailog();
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  const drawerWidth = 240;

  const drawerStyles = {
    width: item ? drawerWidth : '60px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s',
    marginTop: '70px'
  };

  const [trahedNotes, setTrashedNote] = React.useState([]);

  React.useEffect(() => {
    async function fetchTrashedNotes() {
      try {
        const response = await TrashNote();
        setTrashedNote(response.data);
      } catch (error) {
        console.error('Error fetching trashed notes', error);
      }
    }
    fetchTrashedNotes();
  }, []);


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

        <ListItem onClick={handleOpenDailog} >
          <ListItemIcon>
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText primary="Bin"/>
        </ListItem> 
      </List>
    
        <Dialog open={openDialog} onClose={handleCloseDailog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDailog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeletePermently} color='primary'>
            Delete
          </Button>
        </DialogActions>
        </Dialog>
      </Drawer>
  )
}