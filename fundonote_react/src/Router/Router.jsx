import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPages/SignInPage/SignIn';
import SignUp from '../WebPages/SignUp';
import MiniDrawer from '../Components/Header';

export const Router=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<SignIn/>} ></Route>    
                    <Route exact path={"/signup"} element={<SignUp/>} ></Route>
                    <Route exact path={"/minidra"} element={<MiniDrawer/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}