import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPages/SignInPage/SignIn';
import SignUp from '../WebPages/SignUp';
import DashBoardDrawer from '../Components/NavDrawer';
import SearchAppBar from '../Components/head';
import MiniDrawer from '../Components/Header';
import Dashboard from '../Components/MainMenu';

export const Router=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<SignIn/>} ></Route>    
                    <Route exact path={"/signup"} element={<SignUp/>} ></Route>
                    {/* <Route exact path={"/dashboard"} element={<SearchAppBar/>}></Route> */}
                    <Route exact path={"/dashboard"} element={<Dashboard/>} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}