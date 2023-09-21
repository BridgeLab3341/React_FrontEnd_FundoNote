import React from "react";
import './SignIn.css'
import { Button, TextField } from "@mui/material";

function SignIn(){
    return (
        <div className="signmain">
        <div className="main-container">
            <div className="container">
                <div className="fundo">
                    <p className="f">F</p>
                    <p className="u">u</p>
                    <p className="n">n</p>
                    <p className="d">d</p>
                    <p className="o">o</p>
                    <p className="N">N</p>
                    <p className="o">o</p>
                    <p className="t">t</p>
                    <p className="e">e</p>
                </div>
                <div className="login">Login</div>
                <div className="text-message">
                    <p className="mess">Use Your FundoNote Account</p>
                </div>
                <div className="form-content">
                    <div className="username">
                        <TextField id="email" label="Email or Phone" variant="outlined" size="small" required/>
                    </div>
                    <div className="pass">
                    <TextField id="password" label="Password" variant="outlined" size="small" required/>
                    </div>
                    <div className="forgot">
                        <div className="formess">
                            <a href="./">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="cracc">
                        <div className="linkm">
                        <a href="./SignUp.html">Create account</a>
                        </div>
                        <div className="button">
                            <Button class="fLogin">Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignIn