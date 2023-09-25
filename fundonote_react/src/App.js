import logo from './logo.svg';
import './App.css';
import SignUp from './WebPages/SignUp';
//import SignIn from './WebPages/SignInPage/SignIn';
//import { useState } from 'react';
import {Router} from './Router/Router';

function App() {
  return (
    <div className="App"> 
      <Router/>   
    </div>
  );
}
export default App;
