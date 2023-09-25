import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPages/SignInPage/SignIn';
import SignUp from '../WebPages/SignUp';
import PrimarySearchAppBar from '../Components/head';
import DashBoardDrawer from '../Components/NavDrawer';

export const Router=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<SignIn/>} ></Route>    
                    <Route exact path={"/signup"} element={<SignUp/>} ></Route>
                    {/* <Route exact path={"/dashboard"} element={<MiniDrawer/>}></Route> */}
                    <Route exact path={"/dashboard"} element={<DashBoardDrawer/>}></Route>
                    <Route exact path={"/search"} element={<PrimarySearchAppBar/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}