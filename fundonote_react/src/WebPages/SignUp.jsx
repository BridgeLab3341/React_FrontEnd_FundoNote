import React,{useState} from "react";
import './SignUp.css';
import images from '../assets/SignUpImage.jpg'
import { Button, TextField } from '@mui/material';
const validFirstName =new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
const validLastName=new RegExp('^[A-Za-z]{1,}$');
const validEmail=new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

function SignUp() {

    const[data,setData]=useState({firstName:'',lastName:'',email:'',password:''});
    const[validationObj,setvalidationObj]=useState({firstNameBorder:false,firstNameHelper:'',lastNameBorder:false,lastNameHelper:'',emailBorder: false, emailHelper: '', passBorder: false, passHelper:''})

    const handleFirstName=(firstName)=>{
        setData(prevState => (
            {
                ...prevState,
                firstName:firstName.target.value
            }
        ))
    }
    const handleLastName=(lastName)=>{
        setData(prevState =>(
            {
                ...prevState,
                lastName:lastName.target.value
            }
        ))
    }
    const handleEmail=(email)=>{
        setData(prevState=>(
            {
                ...prevState,
                email:email.target.value
            }
        ))
    }
    const handlePassword=(password)=>{
        setData(prevState=>(
            {
                ...prevState,
                password:password.target.value
            }
        ))
    }
    console.log(data);

    const verifySignUpData=()=>{
        let checkFirstName=validFirstName.test(data.firstName)
        let checkLastName=validLastName.test(data.lastName)
        let checkEmail=validEmail.test(data.email)
        let checkPass=validPassword.test(data.password)

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
                                <Button onClick={verifySignUpData} variant="outlined">Next</Button>
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