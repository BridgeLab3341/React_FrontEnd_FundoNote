import { Container, CssBaseline, Grid } from '@mui/material';
import React, { useState } from 'react';
import SearchAppBar from '../MainPage/header';
import MiniDrawer from '../MainPage/navdrawer';
import CreateNote from '../Components/CreateNote/Note';

export default function Dashboard(){
    const[item, setItem]=useState(false)
    return (
        <div>
            <CssBaseline/>
            <SearchAppBar setItem={setItem} style={{marginBottom:'20px'}} />
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <MiniDrawer item={item}/>
                    </Grid>
                </Grid>
                <Grid item xs={9}></Grid>
            </Container>
            <CreateNote/>
        </div>
    )
}