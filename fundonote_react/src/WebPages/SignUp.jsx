import React,{useState} from "react";
import './SignUp.css';
import images from '../assets/SignUpImage.jpg'
import { Button, TextField } from '@mui/material';
import { Register } from "../Services/UserServices";
const validFirstName =new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
const validLastName=new RegExp('^[A-Za-z]{1,}$');
const validEmail=new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

function SignUp() {

    const[data,setData]=useState({FirstName:" ",LastName:" ",
    Email:" ", Password:" "});
    const[validationObj,setvalidationObj]=useState({firstNameBorder:false,firstNameHelper:'',lastNameBorder:false,lastNameHelper:'',emailBorder: false, emailHelper: '', passBorder: false, passHelper:''})

    const handleFirstName=(firstName)=>{
        setData(prevState => (
            {
                ...prevState,
                FirstName:firstName.target.value
            }
        ))
    }
    const handleLastName=(lastName)=>{
        setData(prevState =>(
            {
                ...prevState,
                LastName:lastName.target.value
            }
        ))
    }
    const handleEmail=(email)=>{
        setData(prevState=>(
            {
                ...prevState,
                Email:email.target.value
            }
        ))
    }
    const handlePassword=(password)=>{
        setData(prevState=>(
            {
                ...prevState,
                Password:password.target.value
            }
        ))
    }

    const verifySignUpData=async()=>{
        let checkFirstName=validFirstName.test(data.FirstName)
        let checkLastName=validLastName.test(data.LastName)
        let checkEmail=validEmail.test(data.Email)
        let checkPass=validPassword.test(data.Password)

        if(checkFirstName === false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    firstNameBorder:true,
                    firstNameHelper:'FirstName Should start with captial letter'
                }
            ))
        }
        if(checkLastName===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    lastNameBorder:true,
                    lastNameHelper:'LastName sholud contain one character atleast'
                }
            ))
        }
        if(checkEmail===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    emailBorder:true,
                    emailHelper:'Enter a valid email'
                }
            ))
        }
        if(checkPass===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    passBorder:true,
                    passHelper:'Password Sholud be atleast 8 characters'
                }
            ))
        }
        console.log(data);
        

        if(checkFirstName === true && checkLastName === true && checkEmail === true && checkPass === true){
            let response=await Register(data)
            console.log(response)
        }


    }

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
                              <TextField id="fName" label="First Name" onChange={handleFirstName} error={validationObj.firstNameBorder} helperText={validationObj.firstNameHelper} variant="outlined" size="small" required/>
                                                 
                        </div>
                            <div className="lNameBox">
                                <TextField id="lName" label="Last Fame" onChange={handleLastName} error={validationObj.lastNameBorder} helperText={validationObj.lastNameHelper} variant="outlined" size="small" required/>
                            </div>
                        </div>
                        <div className="cuser">
                            <div className="cuseremail">
                                <TextField id="fuser" label="User Name" onChange={handleEmail} error={validationObj.emailBorder} helperText={validationObj.emailHelper} variant="outlined" size="small" required />
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
                                <TextField id="fPassword" label="Password" onChange={handlePassword} error={validationObj.passBorder} helperText={validationObj.passHelper} variant="outlined" size="small" required/>
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
                                <a href="./">sign in instead</a>
                            </div>
                            <div className="button">
                                <Button href="/dashboard" onClick={verifySignUpData} variant="outlined">Next</Button>
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