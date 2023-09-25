import React, { useState } from "react";
import './SignIn.css'
import { Button, TextField } from "@mui/material";
const validEmail=new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');


function SignIn() {

    const [data, setData] = useState({ email: '', password: '' });
    const [validationObj, setvalidationObj] = useState({ emaiBorder: false, emailHelper: '', passBorder: false, passHelper: '' })

    const handleEmail = (email) => {
        setData(prevState => (
            {
                ...prevState,
                email: email.target.value
            }
        ))
    }
    const handlePassword = (passw) => {
        setData(prevState => (
            {
                ...prevState,
                password: passw.target.value
            }
        ))
    }
    console.log(data);

    const verifyEmailPassword = () => {
        let checkEmail = validEmail.test(data.email)
        let checkPass = validPassword.test(data.password)

        if (checkEmail === false) {
            setvalidationObj(prevState => (
                {
                    ...prevState,
                    emaiBorder: true,
                    emailHelper: 'Enter a valid email'
                }
            ))
        }
        if (checkPass === false) {
            setvalidationObj(prevState => (
                {
                    ...prevState,
                    passBorder: true,
                    passHelper: 'Password Sholud be atleast 8 characters'
                }
            ))
        }
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(data.validEmail && data.validPassword){
            setData({...data,checkEmail:true})
            console.log(data);
            let response = await SignIn(data);
            localStorage.setItem("token",response?.data.data)
            console.log(response);
            let mytoken=localStorage.getItem('token');
            if(mytoken!=null){
                navigate("/dashboard");
            }
        }
    }

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
                            <TextField id="email" label="Email or Phone" onChange={handleEmail} error={validationObj.emaiBorder} helperText={validationObj.emailHelper} variant="outlined" size="small" required />
                        </div>
                        <div className="pass">
                            <TextField id="password" label="Password" onChange={handlePassword} error={validationObj.passBorder} helperText={validationObj.passHelper} variant="outlined" size="small" required />
                        </div>
                        <div className="forgot">
                            <div className="formess">
                                <a href="forget">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="cracc">
                            <div className="linkm">
                                <a href="/Signup">Create account</a>
                            </div>
                            <div className="button">
                                <Button onClick={verifyEmailPassword} class="fLogin">Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn