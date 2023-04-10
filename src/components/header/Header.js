import React from 'react'
import "./header.css"
import {Input, InputGroup, InputLeftElement, Image} from "@chakra-ui/react"
import bellicon from "../../assets/bellicon.png"
import profileimg from "../../assets/profilepic.png"
import dropdown from "../../assets/dropdown.png"
import searchicon from "../../assets/searchicon.png"
import logo from "../../assets/Group.png"
const Header = () => {
  return (
    <div className  = "header">
       <div className="left">
        <img src = {logo} alt = ""/>
       </div>
       <div className="center">
       <InputGroup
       style = {{marginLeft : "100px"}}
       >
          <InputLeftElement
      children={<Image src = {searchicon}  />}
    />
      <Input type='search'  style = {{ width: "319px", backgroundColor : "transparent", color : "#F6F6F6", fontFamily:"inter" }} placeholder='Search...' />
          </InputGroup>
       </div>
       <div className="right">
          <img className = "bellicon" src = {bellicon} alt = ""/>
          <div className="profile-menu">
            <img src = {profileimg} alt = ""/>
            <span>Karan Gupta</span>
            <img className = "drop" src = {dropdown} alt = ""/>
          </div>
       </div>
      </div>
  )
}

export default Header