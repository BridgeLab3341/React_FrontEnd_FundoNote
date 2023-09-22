import logo from './logo.svg';
import './App.css';
import SignUp from './WebPages/SignUp';
import SignIn from './WebPages/SignInPage/SignIn';
import { useState } from 'react';

function App() {
  return (
    <div className="App">    
      <SignUp/>
       {/* <SignIn/> */}
    </div>
  );
}

export default App;
