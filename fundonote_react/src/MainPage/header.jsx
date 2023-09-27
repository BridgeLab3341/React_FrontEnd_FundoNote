import React,{useState} from 'react';
import { styled, alpha,Theme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Keep from '../assets/Keep.png';
import { TextField, colors } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  padding: '0.5%',
  paddingRight:'290px',
  [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50vw',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  paddingBottom: '8%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
          width: '60ch',
      },
  },
}));

  export default function SearchAppBar(props){
    const {item, setItem} = props
    const menuToggle=(event)=>{
      console.log("text", event)
      // props.setItem({item :!props.item})
      setItem(prev=> !prev);
     console.log("verify")
    }
    console.log("item value", item)
    // function menuToggle(){
    //   setItem(prev=> !prev);
    // }
    return (
        <AppBar position="sticky" sx={{backgroundColor:'white'}} >
          <Toolbar>
            <IconButton
              edge="start"
              color="black"
              aria-label="menu"
              onClick={menuToggle}
            >
              <MenuIcon  />
            </IconButton>
            <Typography
              variant="h6"
              style={{
              flexGrow:1,
              display:'flex',
              height:'40px' }}>
              <img src={Keep} class="logo-image" alt="" aria-hidden="true" role="presentation" style={{width:"45px", height:"40px",paddingLeft:'12px'}} />           
              <h3 style={{color: "grey",marginTop:'0px',marginLeft:'3px',fontSize:'22px'}}>FundoNote</h3>
            </Typography>
            <Search>
              <SearchIconWrapper >
                {/* <StyledInputBase/> */}
                <SearchIcon/>
              </SearchIconWrapper>
                <StyledInputBase 
                placeholder='Search...' 
                color='black' 
                inputProps={{'aria-label': 'search'}}
                sx={{
                  justifyItems:'center',
                  alignContent:'center',
                  color:'black',
                }} />
                {/* <StyledInputBase style={{ display:'flex', color:"black", marginRight:'25px', color:'grey',}}/> 
               <InputBase style={{color:"grey", alignItems:"start" }} id="fName" label="First Name" >placeholder='Search'</InputBase> */}
            </Search>
              <IconButton edge="start" color="black" >
              <RefreshIcon /> 
            </IconButton>
            <IconButton color="black">
            <ViewModuleIcon />
            </IconButton>
            {/* <IconButton color="black">
              <SettingsIcon /> 
            </IconButton> */}
            {/* <IconButton color="black">
              <AppsIcon /> 
            </IconButton> */}
            <IconButton color="black">
              <AccountCircleIcon /> 
            </IconButton>
          </Toolbar>
        </AppBar>
    );  
  }



