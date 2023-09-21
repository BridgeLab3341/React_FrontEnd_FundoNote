import React from "react";

function SignIn(){
    return (
        <div class="signmain">
        <div class="main-container">
            <div class="container">
                <div class="fundo">
                    <p class="f">F</p>
                    <p class="u">u</p>
                    <p class="n">n</p>
                    <p class="d">d</p>
                    <p class="o">o</p>
                    <p class="N">N</p>
                    <p class="o">o</p>
                    <p class="t">t</p>
                    <p class="e">e</p>
                </div>
                <div class="login">Login</div>
                <div class="text-message">
                    <p class="mess">Use Your FundoNote Account</p>
                </div>
                <div class="form-content">
                    <div class="username">
                        <input type="text" id="email" name="email" placeholder="Email or phone"/>
                    </div>
                    <div class="pass">
                        <input type="text" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div class="forgot">
                        <div class="formess">
                            <a href="./">Forgot Password?</a>
                        </div>
                    </div>
                    <div class="cracco">
                        <a href="./SignUp.html">Create account</a>
                        <div class="button">
                            <button class="fLogin">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}