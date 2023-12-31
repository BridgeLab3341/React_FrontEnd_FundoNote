import React, { useState } from 'react';
import { styled, alpha, Theme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Keep from '../assets/Keep.png';
import { Menu, MenuItem, TextField, colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '10%',
  padding: '0.5%',
  paddingRight: '290px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50vw',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  paddingBottom: '15px',
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
      width: '58ch',
    },
  },
}));

export default function Header(props) {

  const { item, setItem } = props
  const menuToggle = (event) => {
    console.log("text", event)
    setItem(prev => !prev);
    console.log("verify")
  }
  console.log("item value", item)

  //logout
  const [accProfile, setAccProfile] = useState(null);

  const handleMenuClick = (event) => {
    setAccProfile(event.currentTarget);
    console.log("click");
  }

  const handleMenuClose = () => {
    setAccProfile(null);
  }

  const navigate = useNavigate();

  const handlLogout = () => {
    if (localStorage.key) {
      localStorage.removeItem('token');
      navigate("/");
    }
  }
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }} >
      <Toolbar>
        <IconButton
          edge="start"
          color="black"
          aria-label="menu"
          onClick={menuToggle}
        >
          <MenuIcon />
        </IconButton >
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            display: 'flex',
            height: '40px'
          }}>
          <img src={Keep} class="logo-image" alt="" aria-hidden="true" role="presentation" style={{ width: "45px", height: "40px", paddingLeft: '12px' }} />
          <h3 style={{ color: "grey", marginTop: '0px', marginLeft: '3px', fontSize: '22px' }}>FundoNote</h3>
        </Typography>
        <Search>
          <SearchIconWrapper style={{display:'flex', justifyContent:'center'}} >
            {/* <StyledInputBase/> */}
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search...'
            color='black'
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              justifyItems: 'center',
              alignContent: 'center',
              color: 'black',
              paddingRight:'99px',
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
        <IconButton
          size="large"
          aria-label="account of current user"
          color="black"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuClick}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          accProfile={accProfile}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={Boolean(accProfile)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handlLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}



