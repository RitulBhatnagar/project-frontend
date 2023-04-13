import React from 'react'
import "./link.css"
import logo from "../../assets/Group 13.png"
import { Input, Button, Text, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import image from "../../assets/image 3.jpg"
import {Link} from "react-router-dom"
import companylogo from "../../assets/logoHome.png"

const LinkPage = () => {
  return (
    <div className="operation">
    
    <div className="mirror">
          <div className="child3" />
          <div className="child4" />
        </div>
    <div className = "main-body">
      <img src = {logo} alt = "" className = "locker"/>
    <div className="signInContainer">
    <h1 className="heading">
        Link sent successfully
       </h1>
    <div className="underLine"></div>
      </div> 
      <div className="textContainer">
          <p className = "text">We have mailed link to reset the password on your registered email id. Please click on link to create new password</p>
        </div>
      <div className="formContainer">
   
        <div className="button_Container">
          <Button variant = "solid"
          backgroundColor = "#184D8A"
          colorScheme="facebook"
          color = "white"
          borderRadius= "70px"
          size = "lg"
          width = "400px"
          >
            Resend Link
          </Button>
          <Button variant = "outline"
          backgroundColor = "#white"
          color = "black"
          colorScheme='white'
          borderRadius= "70px"
          size = "lg"
          marginTop = "30px"
          width = "400px"
          >
            <Link to = "/signIn">
            Back to Sign In
            </Link>
          </Button>
        </div>
 
      </div>
   
    </div>
    <Link to = "/">
    <img src = {companylogo} className = "company_logo" alt = ""/>
    </Link>
  </div>
  )
}

export default LinkPage