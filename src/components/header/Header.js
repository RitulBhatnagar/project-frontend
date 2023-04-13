import React from 'react'
import "./header.css"
import {Input, InputGroup, InputLeftElement, Image,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,} from "@chakra-ui/react"
import bellicon from "../../assets/bellicon.png"
import profileimg from "../../assets/profilepic.png"
import dropdown from "../../assets/dropdown.png"
import searchicon from "../../assets/searchicon.png"
import logo from "../../assets/dashLogo.png"
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
         
            <div className="bell-container">
          <img className = "bellicon" src = {bellicon} alt = ""/>
            </div>
            <div className="item-section">
            <Menu >
  <MenuButton background="transparent" as  = {Button} leftIcon={<Image src = {profileimg} alt = ""/>}  rightIcon={<Image src = {dropdown} alt = "" />} _focus={{ backgroundColor: 'transparent', color : "white" }} _hover={{backgroundColor : "transparent", color : "white"}}
>
    Karan gupta
  </MenuButton>
  <MenuList backgroundColor="blackAlpha.300" color =
  "black">
    <MenuItem>My profile</MenuItem>
    <MenuItem>LogOut</MenuItem>
  </MenuList>
</Menu>
            </div>
         
       </div>
      </div>
  )
}

export default Header