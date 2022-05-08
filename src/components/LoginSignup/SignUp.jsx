import React from 'react';
import styled from "styled-components"
import styles from "./NeededStyles.module.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Wrapper = styled.div`
    width:50%;
    margin:auto;
    box-sizing:border-box;
`
const CAPara = styled.h1`
    color: #161616;
    font-size: 30px;
    font-weight: 400;
    font-family: Poppins;
    text-align:center;
`
const FbDiv = styled.div`
    height:40px;
    border-radius:4px;
    background-color:#3b5998;
    width:94.8%;
    color:white;
    align-items:center;
    justify-content:space-between;
    display:flex;
    font-size:14px;
    margin:auto;
    margin-top:40px;
    border:none;
    padding-left:20px;
    font-family:sans-serif;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
`
const GoogleDiv = styled.div`
    height:40px;
    border-radius:4px;
    background-color:#dd4b39;
    width:94.8%;
    color:white;
    align-items:center;
    justify-content:space-between;
    display:flex;
    font-size:14px;
    margin:auto;
    margin-top:10px;
    border:none;
    padding-left:20px;
    font-family:sans-serif;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
`

const InputField = styled.input`
    height:38px;
    width:98%;
    margin-top:10px;
    border:1px solid #cbcbcb;
    &:focus{
        outline-color: rgb(229, 185, 95);
        outline-style: initial;
        outline-width: initial;
        border:1px #e5b95f solid !important; 
    }
`
const InputAbove = styled.label`
    font-size:14px;
    text-align:left;
    margin-top:30px;
    color: #7a7a7a;
    font-weight: 700;
    font-family:Poppins;
`
const CreateAccountBtn = styled.button`
    margin-top: 20px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    width: 100%;
    height: 40px;
    box-shadow: none;
    padding:0px;
    background-color:#e5b95f;
    border:none;
    letter-spacing: 1px;
    font-size: 1.1em;
    font-weight: 400;
    line-height: 40px;
    font-family:Poppins;
    &:hover{
        background-color:black;
        color:white;
        cursor:pointer;
    }
`
const OrPara = styled.p`
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(170, 170, 170);
    margin-top: 20px;
    margin-right: 0px;
    margin-bottom: 12px;
    margin-left: 0px;
    text-align:center;
`
const OrText = styled.span`
    color: #282828;
    position: relative;
    top: -12px;
    display: inline-block;
    background-color: #fff;
    text-align: center;
    font-size: 16px;
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
`

const SignInBtn = styled.button`
    width: 100%;
display: block;
height: 40px;
text-align: center;
line-height: 40px;
letter-spacing: 1px;
font-size: 1.1em;
font-weight: 400;
background-color:#e5b95f;
font-family:Poppins;
border:none;
    &:hover{
        background-color:black;
        color:white;
        cursor:pointer;
    }
`

export const SignUp = ()=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [flag, setFlag] = useState(false)
    // const [login, setLogin] = useState(true)
    const navigate = useNavigate()
    
    function handleSignin(){
        navigate("/login")
    }
    var signupArr = JSON.parse(localStorage.getItem("signedupDetails")) || []
    function handleSubmit(e){
        e.preventDefault()
        var signupObj ={
            signupFirstName : firstName,
            signupLastName : lastName,
            signupEmail : email,
            signupPassword : password,
        }

        if(firstName == "" || lastName == "" || email == "" || password == ""){
            toast.error("ERROR - Please fill all the details", {
                position:"top-center",
                theme:"dark"
            })
        }
        else{
            signupArr.push(signupObj)
            localStorage.setItem("signedupDetails", JSON.stringify(signupArr))
            navigate("/login")
        }
    }

    return(
        <>
        <Wrapper>
        <CAPara>Create An Account</CAPara>    
        <div style = {{width:"46%", margin:"auto"}}>
        <FbDiv>
            <span>Sign In with Facebook </span>
            <i className="fa-brands fa-facebook-f" id ={styles.fbIcon}></i>
        </FbDiv>
        
        <GoogleDiv>
            <span>Sign In with Google</span>
            <i className="fa-brands fa-google" id ={styles.googleIcon}></i>
        </GoogleDiv>
        <form onSubmit ={handleSubmit}>
            <div>
                <div style = {{marginTop:"20px", textAlign:"left"}}>
                    <InputAbove >First Name <em style ={{color:"#f1152f", fontStyle:"normal", fontWeight:"300"}}>*</em> </InputAbove>
                </div>
                <InputField type="text" value ={firstName} onChange={(e) => {setFirstName(e.target.value);}} />
            </div>

            <div>
                <div style = {{marginTop:"20px", textAlign:"left"}}>
                    <InputAbove>Last Name <em style ={{color:"#f1152f", fontStyle:"normal", fontWeight:"300"}}>*</em>  </InputAbove>
                </div>
                <InputField type="text" value ={lastName} onChange={(e) => {setLastName(e.target.value);}}/>
            </div>

            <div>
                <div style = {{marginTop:"20px", textAlign:"left"}}>
                <InputAbove>Your Email Address <em style ={{color:"#f1152f", fontStyle:"normal", fontWeight:"300"}}>*</em> </InputAbove>
                </div>
                <InputField type="email" value ={email} onChange={(e) => {setEmail(e.target.value);}}/>
            </div>
            <div>
                <div style = {{marginTop:"20px", textAlign:"left"}}>
                    <InputAbove>Your Password <em style ={{color:"#f1152f", fontStyle:"normal", fontWeight:"300"}}>*</em> </InputAbove>
                </div>
                <InputField type="password"  value ={password} onChange={(e) => {setPassword(e.target.value);}}/>
            </div>
            <div>
                <p>
                    <CreateAccountBtn>Create an Account</CreateAccountBtn>
                </p>
            </div>
            <ToastContainer />
        </form>
            <OrPara>
                <OrText>Or</OrText>
            </OrPara>
            <div>
                <SignInBtn onClick ={handleSignin}>
                    Sign In
                </SignInBtn>
            </div>
        </div>
        </Wrapper>
        
        </>
    )
}
