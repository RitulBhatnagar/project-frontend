import React, { useEffect } from 'react'
import editicon from "../../assets/editicon.png"
import delicon from "../../assets/delicon.png"
import { useDispatch, useSelector } from 'react-redux'
import "./clientcomp.css"
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
// import { useState } from 'react'
// import { confirmAlert } from "react-confirm-alert";
// import { createclient, deleteclient, getAllclient,  }  from "../../redux/client/clientSlice"

const initialState = {
  client_code : "",
  client_name : "",
  name_of_industry : "",
  size : "",
  growth_cagr : "",
  genral_overview : "",
  competetors : "",
  latest_news_snippets : "",
  entity_name : "",
}


const ClientComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const[client, setClient] = useState(initialState);
  // const dispatch = useDispatch();
  // console.log(entityName);
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const{name, value} = e.target;
  //   setClient({...client, [name]  :value});
  //   console.log(client);
  // }
  // const delClient = async(id) => {
  //  console.log(id);
  //  await dispatch(deleteclient(id));
  //  await dispatch(getAllclient());
  // }
  // const confirmDelete = (id) => {
  //   confirmAlert({
  //     title: "Delete Client",
  //     message: "Are you sure you want to delete this Client.",
  //     buttons: [
  //       {
  //         label: "Delete",
  //         onClick: () => delClient(id),
  //       },
  //       {
  //         label: "Cancel",
  //       },
  //     ],
  //   });
  // }
  // const handleSubmit = async(e)=>{
  //   e.preventDefault();
  //   const formData = {
  //    "client_code" : client.client_code,
  //    "client_name" : client.client_name,
  //    "name_of_industry" : client.name_of_industry,
  //    "size" : client.size,
  //     "growth_cagr" : client.growth_cagr,
  //     "genral_overview" : client.genral_overview,
  //     "competetors" : client.competetors,
  //     "latest_news_snippets" : client.latest_news_snippets,
  //     "entity_name" : client.entity_name 
  //   }
  //   await dispatch(createclient(formData));
  //   await dispatch(getAllclient());
  //   setClient(initialState)
  // }
  return (
       <div className="main">
 <div className="top-container">
        <div className="heading-container">
        <h1>Add Client Master</h1>
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
          <DrawerHeader fontFamily = "Lato" fontWeight = "bold" fontSize = "18px">Add Client Master</DrawerHeader>
          <Divider/>
          <DrawerBody>
            <div className = "input-box-2">
           <div className="input">
           <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">Entity</Text>
           <Select
        placeholder='entity'
        width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "entity_name"
        >
          {/* {
            entityName.map((data, i) => (
              <option>{data}</option>
            ))
          } */}
          </Select>

           </div>
           <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Client Code</Text>
           <Input
        placeholder='Enter Client Code'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "client_code"
  
      />
      </div>
      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Client Name</Text>
           <Input
        placeholder='Enter Client Name'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        name = "client_name"

      />
      </div>
            </div>
            <div className="industry-box">
              <Text marginTop="20px" fontFamily = "Lato" fontSize
               = "18px" fontWeight = "700">Industry Parameters</Text>
               <div className="input-box-2">
               <div className="input">
           <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">Name of Industry</Text>
           <Select
        placeholder='Select'
        width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "name_of_industry"

        >
        <option>Service</option>
        <option>Marketing</option>
        <option>Operation and head</option>
        </Select>

           </div>
           <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Size</Text>
           <Input
        placeholder='Enter Size'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        name = "size"

      />
      </div>
      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Growth CAGR</Text>
           <Input
        placeholder='Select'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "growth_cagr"
        
      />
      </div>
      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Genral Overview</Text>
           <Input
        placeholder='Select'
         width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "genral_overview"
       
      />
      </div>
      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Latest News Snippets</Text>
           <Textarea
        placeholder='Latest News Snippets'
         width = "410px"
         height = "58px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "latest_news_snippets"
     
      />
      </div>

      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >
          Top 10 Competitors
         </Text>
           <Textarea
        placeholder='Enter Top 10 Competitors'
         width = "410px"
         height = "58px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
         name = "competetors"
    
      />
      </div>
      
          </div>
      </div>
      </DrawerBody>
                <Divider/>
          <DrawerFooter>
            <Button variant='outline' size = "lg" backgroundColor =  "#ffff" borderRadius = "80px"color = "#333333" width = "200px" border = " 1px solid #999999"marginRight="20px" height = "38px" >
              Reset
            </Button>
            <Button colorScheme='blue' size = "lg" backgroundColor =  "#274C86" borderRadius = "80px"color = "white" width = "200px" height = "38px" >+Add</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </div>
      <div className="table-container">
      <tabel>
            <thead>
              <tr className = "row">
            <th>Client Code</th>
           <th>Client Name</th>
          <th>Name of Industry</th>
          <th>Size</th>
          <th>Growth CAGR</th>
          <th>Genral Overview</th>
          <th>Top 10 Competitors</th>
          <th>Latest News Snippets</th>
          <th>Action</th>

              </tr>

            </thead>
            <tbody>
            <tr>
                  <td>u10</td>
                    <td>Microsoft</td>
                    <td>Software</td>
                    <td>100000</td>
                    <td>50%</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button  className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
                  <tr>
                  <td>u10</td>
                    <td>Microsoft</td>
                    <td>Software</td>
                    <td>100000</td>
                    <td>50%</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button  className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
                  <tr>
                  <td>u10</td>
                    <td>Microsoft</td>
                    <td>Software</td>
                    <td>100000</td>
                    <td>50%</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button  className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
                  <tr>
                  <td>u10</td>
                    <td>Microsoft</td>
                    <td>Software</td>
                    <td>100000</td>
                    <td>50%</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button  className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
                  <tr>
                  <td>u10</td>
                    <td>Microsoft</td>
                    <td>Software</td>
                    <td>100000</td>
                    <td>50%</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td>lorem ipsum</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button  className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
        
            {/* {
              clients.map((data) => {
                const{id, client_code, client_name, name_of_industry, size, growth_cagr, genral_overview,competetors, latest_news_snippets} = data;
                return(
                  <tr key = {id}>
                  <td>{client_code}</td>
                    <td>{client_name}</td>
                    <td>{name_of_industry}</td>
                    <td>{size}</td>
                    <td>{growth_cagr}%</td>
                    <td>{genral_overview === "" ? "null" : genral_overview}</td>
                    <td>{competetors === "" ? "Null" : competetors}</td>
                    <td>{latest_news_snippets === "" ? "Null" : latest_news_snippets}</td>
                    <td className = "edit-delete">
                       <div >
                       <button onClick = {onOpen} ref = {btnRef}  className = "edit-btn" >
                        <img   src = {editicon} alt = ""/>  
                        Edit
                      </button>
                       </div>
                      <button onClick={() => confirmDelete(id)} className = "del-btn" >
                        <img src = {delicon} alt = ""/>
                       Delete
                      </button>
                    </td>
        
                  </tr>
                )
              })
            }
     */}
        </tbody>
           </tabel>
      </div>
       </div>
  ) 
}

export default ClientComp