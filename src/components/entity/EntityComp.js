import React, { useEffect } from 'react'
import "./entitycomp.css"
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
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { createEntity } from '../../redux/entity/entitySlice'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { deleteEntity, getAllEntity, getSingleEntity, updateEntity, selectEntity } from '../../redux/entity/entitySlice';
const initialState = {
  entity_code : "",
  entity_name : "",
}
const EntityComp = ({entities}) => {
  const dispatch = useDispatch();
  const entityEdit = useSelector(selectEntity);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  const[entity, setEntity] = useState(initialState)
  const delProduct = async (id) => {
    console.log(id);
    await dispatch(deleteEntity(id));
    await dispatch((getAllEntity()));
  };
  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Entity",
      message: "Are you sure you want to delete this Entity.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delProduct(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  }
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setEntity({...entity, [name] : value});
    console.log(entity);
  }

  const handleUpdate = (id) => {
    console.log(id);
    // const singleEntity = useSelector(getSingleEntity(id));
   
  
  }
  const saveEntity = async (e) => {
    e.preventDefault();

    const formData = {
      "entity_code" : entity.entity_code,
      "entity_name" : entity.entity_name
    }
      await dispatch(createEntity(formData));
      await dispatch(getAllEntity());
      setEntity(initialState)
  
  } 
  return (
    <div className='main'>
      <div className="top-container">
        <div className="heading-container">
        <h1>Entity Master</h1>
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
          <DrawerHeader fontFamily = "Lato" fontWeight = "bold" fontSize = "18px">Add Entity Master</DrawerHeader>
          <Divider/>
          <DrawerBody>
            <div className = "input-box">
           <div className="input">
           <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">Entity Code</Text>
           <Input
        placeholder='Enter Entity Code'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         marginTop="5px"
        name = "entity_code"
        type = "text"
        value  = {entity.entity_code}
        onChange = {handleChange}
      />
      <Text
      fontFamily =  'Lato'
      fontStyle =  "normal"
      fontWeight =  "400"
      fontSize = " 12px"
      lineHeight="14px" 
      color = "#333333"
      marginTop="10px"
      >
      (Is unique and auto generated by the system)
      </Text>
           </div>
           <div className="input2">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Entity Name</Text>
           <Input
        placeholder='Enter Entity Name'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        name = "entity_name"
        value = {entity.entity_name}
        onChange = {handleChange}
      />
      </div>
            </div>
          </DrawerBody>
          <Divider/>
          <DrawerFooter>
            <Button variant='outline' size = "lg" backgroundColor =  "#ffff" borderRadius = "80px"color = "#333333" width = "200px" border = " 1px solid #999999"marginRight="20px" height = "38px" onClick={onClose}>
              Reset
            </Button>
            <Button colorScheme='blue' size = "lg" backgroundColor =  "#274C86" borderRadius = "80px"color = "white" width = "200px" height = "38px" onClick={saveEntity}>+Add</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </div>
      <div className="table-container">
      <tabel>
            <thead>
              <tr className = "row">
              <th>Entity Code</th>
           <th>Entity Name</th>
          <th style  = {{width : "76%", textAlign : "center"}}>Action</th>
              </tr>

            </thead>
            <tbody>
            <tr>
          <td>u1</td>
            <td>Engagement Master</td>
            <td className = "edit-delete">
               <div >
               <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                <img   src = {editicon} alt = ""/>  
                Edit
              </button>
               </div>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>u1</td>
            <td>Engagement Master</td>
            <td className = "edit-delete">
               <div >
               <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                <img   src = {editicon} alt = ""/>  
                Edit
              </button>
               </div>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
           <td>u1</td>
            <td>Engagement Master</td>
            <td className = "edit-delete">
               <div >
               <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                <img   src = {editicon} alt = ""/>  
                Edit
              </button>
               </div>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>u1</td>
            <td>Engagement Master</td>
            <td className = "edit-delete">
               <div >
               <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                <img   src = {editicon} alt = ""/>  
                Edit
              </button>
               </div>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          {/* {
            entities.map((data, index) => {
              const {id, entity_name, entity_code} = data;
               return ( 
               <tr  key = {id}>
          <td>{entity_code}</td>
            <td>{entity_name}</td>
            <td className = "edit-delete">
               <div onClick={ () =>handleUpdate(id)}  >
               <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                <img   src = {editicon} alt = ""/>  
                Edit
              </button>
               </div>
              <button className = "del-btn" onClick = {() =>  confirmDelete(id)}>
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>)
              
      } )
          } */}
        </tbody>
           </tabel>
      </div>

    </div>
  )
}

export default EntityComp