import React, { useState, useEffect } from 'react'
import "./forgot.css"
import { Input, Button, Text, InputGroup, InputRightElement, Image, Link } from "@chakra-ui/react";
import image from "../../assets/image 3.jpg"
import mailicon from "../../assets/mail-icon.png"
import logo from "../../assets/lock2.jpg"
import companylogo from "../../assets/Group.png"
const ForgotPassword = () => {
  const intialValues = {email : ""}
  const[formValues, setFormValues] = useState(intialValues)
  const[formError, setFormError] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
     e.preventDefault();
     const {name, value} = e.target;
    setFormValues({...formValues, [name] : value})
    console.log(formValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
    setFormError(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formError)
    if(formError.email){
      console.log("invalid")
    }
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formValues);
    }
  })
  const validate = (values) => {
   const errors = {}
   const regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(!values.email){
     errors.email = "*Please Enter a Email"
   }else if(!regex.test(values.email)){
    errors.email = "*Please Enter a valid email"
   }
   return errors;
  }
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
        Forgot Password?
       </h1>
    <div className="underLine"></div>
      </div> 
      <div className="textContainer">
          <p className = "text">Please enter your registered email id. We will mail you the link to reset your password</p>
        </div>
     <form onSubmit={handleSubmit} >

      <div className="formContainer">
      
     <div className="emailContainer">
     <Text  fontSize = "14px" fontWeight= "bold">Email</Text>
          <InputGroup>
        <Input variant = "flushed" isInvalid = {formError.email}  placeholder="Enter email id" name = "email" value = {formValues.email} onChange = {handleChange} fontWeight="500" />
        <InputRightElement children = {<Image src = {mailicon} />}/>
        </InputGroup>
        <Text marginLeft = "265px" color = "tomato" fontSize="12px">{formError.email}</Text>
        </div>
        <div className="buttonContainer2">
          <Button variant = "solid"
          backgroundColor = "#184D8A"
          colorScheme="facebook"
          color = "white"
          borderRadius= "70px"
          size = "lg"
          width = "400px"
          type = "submit"
          >
            Send Link
          </Button>
        </div>
 
      </div>
     </form>
   
    </div>
    <Link href = "/">
    <img src = {companylogo} className = "company_logo" alt = ""/>
    </Link>
  </div>
  )
}

export default ForgotPassword