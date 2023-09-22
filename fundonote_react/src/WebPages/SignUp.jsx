import React,{useState} from "react";
import './SignUp.css';
import images from '../assets/SignUpImage.jpg';
// import TextField from '@mui/material/TextField';
// or
import { Button, TextField } from '@mui/material';
//import { validFirstName,validLastName,validEmail,validPassword } from './WebPages/Regex/Validations';

function SignUp() {
    return (
        <div className="signupPage">
            <div className="main">
                <div className="main-content">
                    <div className="main-header">
                        <p className="f">F</p>
                        <p className="u">u</p>
                        <p className="n">n</p>
                        <p className="d">d</p>
                        <p className="o">o</p>
                        <p className="n">N</p>
                        <p className="o">o</p>
                        <p className="t">t</p>
                        <p className="e">e</p>
                    </div>
                    <div className="header">
                        <p>Creating Your FundooNote Account</p>
                    </div>
                    <div className="content">
                        <div className="cname">
                            <div className="fNameBox">
                            <TextField id="fName" label="First Name" variant="outlined" size="small" required/>                     
                        </div>
                            <div className="lNameBox">
                                <TextField id="lName" label="Last Fame" variant="outlined" size="small" required/>
                            </div>
                        </div>
                        <div className="cuser">
                            <div className="cuseremail">
                                <TextField id="fuser" label="User Name" variant="outlined" size="small" required />
                            </div>
                            <div>
                                <span className="spanText">You can use Letters,numbers & periods</span>
                            </div>
                            <div>
                                <p className="message">Use my current email instead</p>
                            </div>
                        </div>
                        <div className="cpass">
                            <div className="fpass">
                                <TextField id="fPassword" label="Password" variant="outlined" size="small" required/>
                                <TextField id="fconfPass" label="Confirm Password" variant="outlined" size="small" required />
                            </div>
                            <div>
                                <p className="txt-message">Use 8 or more characters with a mix of letters, numbers, & symbols</p>
                            </div>
                        </div>
                        <div className="cboxpass">
                            <div className="checkBoxClass"> 
                                <input type="checkbox" id="Check Password" name="Check Password" />
                            </div>
                            <div className="showPassword">
                                <label >Show Password</label>
                            </div>
                        </div>
                        <div className="buttonText">
                            <div className="message">
                                <a href="./SignIn.html">sign in instead</a>
                            </div>
                            <div className="button">
                                <Button variant="outlined">Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-content">
                    <div className="image">
                        <img src={images}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp