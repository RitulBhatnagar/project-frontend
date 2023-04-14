import { Input, Button, Text, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
// import "./FrameComponent.css";
import "./SignIn.css";
import image from "../../assets/image 3.jpg"
import mailicon from "../../assets/mail-icon.png"
import lockicon from "../../assets/lock-icon.png"
import companylogo from "../../assets/logoHome.png"
import { useState, useEffect } from "react";
import {Link, Navigate, useNavigate} from "react-router-dom"

const FrameComponent = () => {
  const intialValues = {email : "", password : ""}
  const[formValues, setFormValues] = useState(intialValues)
  const[formError, setFormError] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  console.log(navigate)
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
  const handleSignIn = (e)=>{
    e.preventDefault();

     if(formValues.email  === "karangupta@spcnc.com" && formValues.password === "admin"){
      navigate("/dashboard")
     }
     else{
        setFormError("Incorrect email id or password");
     }
  }
  const validate = (values) => {
   const errors = {}
   const regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(!values.email){
     errors.email = "*Please Enter a Email"
   }
   else if(!regex.test(values.email)){
    errors.email = "*Please Enter a valid email"
   }
   if(!values.password){
    errors.password = "*Please Enter a password"
   }
   return errors;
  }
  return (
  <div className="operation">    

    <div className="mirror">
          <div className="child3" />
          <div className="child4" />
        </div>
    <div className = "main-body1">
    <div className="signInContainer1">
    <h1 className="heading1">
        Sign In
       </h1>
    <div className="underLine1"></div>
      </div> 
      <div className="formContainer">
        <form onSubmit = {handleSubmit}>
        <div className="emailContainer1">
          <Text  fontSize = "14px" fontWeight="bold">Email</Text>
          <InputGroup>
        <Input variant = "flushed" isInvalid = {formError.email}  placeholder="Enter email id" name = "email" value = {formValues.email} onChange = {handleChange} />
        <InputRightElement children = {<Image src = {mailicon}/>}/>
        </InputGroup>
        <Text marginLeft = "250px" color = "tomato" fontSize="12px">{formError.email}</Text>
        </div>
        <div className="passwordContainer1">
          <Text fontSize = "14px" fontWeight="bold">Password</Text>
          <InputGroup>
        <Input isInvalid = {formError.password} variant = "flushed" type = "password" placeholder="Enter Password" name = "password" value = {formValues.password} onChange={handleChange}/>
        <InputRightElement children = {<Image src = {lockicon}/>}/>
        </InputGroup>
        <Text color = "tomato" fontSize = "12px" marginLeft = "250px">{formError.password}</Text>
        </div>
        <div className="forgotContainer">
          <Link to = "/forgotPassword">
            Forgot Password
          </Link>
          <div className = "underLine2"></div>
        </div>
        <div className="buttonContainer3">
          <Button variant = "solid"
          backgroundColor = "#184D8A"
          colorScheme="facebook"
          color = "white"
          borderRadius= "70px"
          size = "lg"
          width = "400px"
          type = "submit"
          onClick = {handleSignIn}
          >
            Sign In
          </Button>
        </div>
        </form>
       
        <div className="termsContainer">
      <p className="terms">
            {`By Signing in I agree `}
            <span className="terms2"> <a href = "">Terms & Conditions </a></span>
            and
          </p>
          <p className="terms3"><a href = ""> Privacy Policy</a></p>
      </div>
      </div>
   
    </div>
    <Link to = "/">
    <img src = {companylogo} className = "company_logo" alt = ""/>
    </Link>
  </div>
  );
};

export default FrameComponent;
