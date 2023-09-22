import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPages/SignInPage/SignIn';
import SignUp from '../WebPages/SignUp';

export const Router=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<SignIn/>} ></Route>    
                    <Route exact path={"/signup"} element={<SignUp/>} ></Route>               
                </Routes>
            </BrowserRouter>
        </div>
    )
}