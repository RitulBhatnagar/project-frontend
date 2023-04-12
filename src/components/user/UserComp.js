import React from 'react'
import editicon from "../../assets/editicon.png"
import delicon from "../../assets/delicon.png"
import { useDispatch, useSelector } from 'react-redux'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, 
  Input,
  Button,
  Divider,
  Text,
  Select,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'
import { confirmAlert } from "react-confirm-alert";

const UserComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  return (
    <div className="main">
    <div className="top-container">
           <div className="heading-container">
           <h1>User ID Master</h1>
           <p>Please add the details of the entity that you are opening today</p>
         </div>
         <button ref = {btnRef} onClick = {onOpen} className = "add-btn">+Add</button>
         <Drawer
         isOpen = {isOpen}
         placement='right'
         onClose = {onClose}
         finalFocusRef={btnRef}
         size = "md"
         >
          <DrawerOverlay />
           <DrawerContent>
             <DrawerCloseButton />
             <DrawerHeader fontFamily = "Lato" fontWeight = "bold" fontSize = "18px">Add User ID Master</DrawerHeader>
             <Divider/>
             <DrawerBody>
               <div className = "input-box-2">
              <div className="input">
              <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">
               User Name
              </Text>
              <Input
           placeholder='User Name'
           width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           />
   
              </div>
              <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Role</Text>
              <Select
           placeholder='User'
            width = "200px"
            height = "38px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
   
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >First Name</Text>
              <Input
           placeholder='Enter First Name'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Last Name</Text>
              <Input
           placeholder='Enter Last Name'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Entity (Only Super Admin)</Text>
              <Input
           placeholder='Select'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Client</Text>
              <Select
           placeholder='Select'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Enter Email</Text>
              <Input
           placeholder='Enter Last Name'
            width = "415px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Mobile</Text>
              <Input
           placeholder='Enter Mobile'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Country</Text>
              <Select
           placeholder='Select'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Password</Text>
              <Input
           placeholder='Enter Password'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
         <div className="input">
            <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Confirm Password</Text>
              <Input
           placeholder='Confirm Password'
            width = "200px"
            backgroundcColor  = " #F7F7F7"
            border = "1px solid #D5D5D5"
            color  = "#999999"
            marginTop="5px"
           
         />
         </div>
               </div>
             
         </DrawerBody>
                   <Divider/>
             <DrawerFooter>
               <Button variant='outline' size = "lg" backgroundColor =  "#ffff" borderRadius = "80px"color = "#333333" width = "200px" border = " 1px solid #999999"marginRight="20px" height = "38px" >
                 Reset
               </Button>
               <Button colorScheme='blue' size = "lg" backgroundColor =  "#274C86" borderRadius = "80px"color = "white" width = "200px" height = "38px">+Add</Button>
             </DrawerFooter>
           </DrawerContent>
         </Drawer>
         </div>
         <div className="table-container">
         <tabel>
               <thead>
                 <tr  className = "row">
               <th style = {{width : "10%"}}>User Name</th>
              <th  style = {{width : "10%"}}>First Name</th>
             <th  style = {{width : "10%"}}>Last Name</th>
             <th  style = {{width : "10%"}}>Email</th>
             <th  style = {{width : "10%"}}>Mobile</th>
              <th  style = {{width : "10%"}}>Country</th>
              <th  style = {{width : "10%"}}>Role</th>
              <th  style = {{width : "10%"}}>Action</th>
                 </tr>
   
               </thead>
               <tbody>
           
                  <tr>
   
               <td >Sonali2013</td>
               <td>Sonali</td>
               <td>Chopra</td>
               <td>sonali20@gmail.com</td>
               <td>+91 9990082132</td>
               <td>India</td>
               <td>Finance Officer</td>
               <td className = "edit-delete">
                  <div >
                  <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                   <img   src = {editicon} alt = ""/>  
                   Edit
                 </button>
                  </div>
                 <button className = "del-btn" >
                   <img src = {delicon} alt = ""/>
                  Delete
                 </button>
               </td>
   
             </tr>
             <tr>
   
   <td >Sonali2013</td>
   <td>Sonali</td>
   <td>Chopra</td>
   <td>sonali20@gmail.com</td>
   <td>+91 9990082132</td>
   <td>India</td>
   <td>Finance Officer</td>
   <td className = "edit-delete">
      <div >
      <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
       <img   src = {editicon} alt = ""/>  
       Edit
     </button>
      </div>
     <button className = "del-btn" >
       <img src = {delicon} alt = ""/>
      Delete
     </button>
   </td>

 </tr>
 <tr>
   
   <td >Sonali2013</td>
   <td>Sonali</td>
   <td>Chopra</td>
   <td>sonali20@gmail.com</td>
   <td>+91 9990082132</td>
   <td>India</td>
   <td>Finance Officer</td>
   <td className = "edit-delete">
      <div >
      <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
       <img   src = {editicon} alt = ""/>  
       Edit
     </button>
      </div>
     <button className = "del-btn" >
       <img src = {delicon} alt = ""/>
      Delete
     </button>
   </td>

 </tr>
 <tr>
   
   <td >Sonali2013</td>
   <td>Sonali</td>
   <td>Chopra</td>
   <td>sonali20@gmail.com</td>
   <td>+91 9990082132</td>
   <td>India</td>
   <td>Finance Officer</td>
   <td className = "edit-delete">
      <div >
      <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
       <img   src = {editicon} alt = ""/>  
       Edit
     </button>
      </div>
     <button className = "del-btn" >
       <img src = {delicon} alt = ""/>
      Delete
     </button>
   </td>

 </tr>
 <tr>
   
   <td >Sonali2013</td>
   <td>Sonali</td>
   <td>Chopra</td>
   <td>sonali20@gmail.com</td>
   <td>+91 9990082132</td>
   <td>India</td>
   <td>Finance Officer</td>
   <td className = "edit-delete">
      <div >
      <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
       <img   src = {editicon} alt = ""/>  
       Edit
     </button>
      </div>
     <button className = "del-btn" >
       <img src = {delicon} alt = ""/>
      Delete
     </button>
   </td>

 </tr>
       
           </tbody>
              </tabel>
         </div>
          </div>
  )
}

export default UserComp