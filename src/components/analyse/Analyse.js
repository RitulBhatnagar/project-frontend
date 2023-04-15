import React, {useState} from 'react'
import comingicon from "../../assets/coming.png"
import dropicon from "../../assets/blackdrop.png"
import excelicon from "../../assets/excel-icon.png"
import pbxicon from "../../assets/pb-icon.png"
import "./analyis.css"
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
   Tabs, TabList, TabPanels, Tab, TabPanel,Fade, ScaleFade, Slide, SlideFade, Collapse, Icon
} from '@chakra-ui/react'
import data from "./analyse.json"
import IconContainer from './IconContainer'
const Analyse = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  // const {isOpen2, onToggle} = useDisclosure();
  const[show, setShow] = useState(false);
  const btnRef = React.useRef()
  return (
    <div className="main">
      <div className="top-container">
        <div className="heading-container">
          <h1>Data Operations - Analysis</h1>
          <p>Please add the details of the entity that you are opening today</p>
        </div>
        <div className="button-container">
          <button ref = {btnRef} onClick= {onOpen}
           className = "add-btn">Analyze</button>
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
          <DrawerHeader fontFamily = "Lato" fontWeight = "bold" fontSize = "18px">
          Data Operations - Analysis
          </DrawerHeader>
          <Divider/>
          <DrawerBody>
            <div className = "input-box-2">
           <div className="input">
           <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">
            Client Details
           </Text>
           <Select
        placeholder='Select'
        width = "415px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        />

           </div>
           <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Engagement Details</Text>
           <Select
        placeholder='Enter Engagement Code'
         width = "415px"
         height = "38px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"

      />
      </div>
      <div className="input">
         <Text fontFamily = "Lato" fontWeight = "400" fontSize = "12px" lineHeight="14px" >Date range</Text>
           <Input
      placeholder=" From : Select Date and Time"
      size="md"
      type="datetime-local"
       width = "220px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        
      />
        <Input
      placeholder=" To"
      size="md"
      type="datetime-local"
       width = "220px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        marginLeft="4px"
      />
      </div>
      <div className="input">
      <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">
            Bank Name
           </Text>
           <Select
        placeholder='Select Bank Name'
        width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        />
      </div>
      <div className="input">
      <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">
            Account Number
           </Text>
           <Input
        placeholder='Enter Account Number'
        width = "200px"
         backgroundcColor  = " #F7F7F7"
         border = "1px solid #D5D5D5"
         color  = "#999999"
         marginTop="5px"
        />
      </div>
      <div className="input">
      <Text fontFamily = "Lato" fontWeight = "400" lineHeight="14px" fontSize = "12px">
            Materiality
           </Text>
           <Input
        placeholder='Enter materiality'
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
           <div className="last-drawer">
           <div className="buttonContainer">
           <Button variant='outline' size = "lg" backgroundColor =  "#ffff" borderRadius = "80px"color = "#333333" width = "200px" border = " 1px solid #999999"marginRight="20px" height = "38px" >
              Reset
            </Button>
            <Button colorScheme='blue' size = "lg" backgroundColor =  "#274C86" borderRadius = "80px"color = "white" width = "200px" height = "38px" onClick = {() => setShow(!show)}>Analyze</Button>
           </div>
            {
              show === true ? <IconContainer/> : ""
            }
           </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </div>
     
      </div>
      <div className="table-container">
          <Tabs 
          backgroundColor  =  "#F6F6F6"
          borderRadius  = "6px"
          colorScheme='teal'
          >
            <TabList
            fontSize = "14px"
            fontFamily = "Lato"
            lineHeight = "17px"
            fontWeight = "700"
            width="100%"
            >
              <Tab>Overview</Tab>
              <Tab>Banking</Tab>
              <Tab>Procure to pay</Tab>
              <Tab>Order to cash</Tab>
              <Tab>Hire to Retire</Tab>
              <Tab>Record to Report</Tab>
              <Tab>Supply Chain  Management</Tab>
              <Tab>Budget & Forecaasting</Tab>
              <Tab>Plan to produce</Tab>

            </TabList>
            <TabPanels>
              <TabPanel>
              <iframe title="Report Section" width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiNWM1ZThjNDEtMjU5OC00MDM1LWE4MzEtMGZmYjQ0NWJhZDQ0IiwidCI6IjZhYWQ0ZjdlLWQxMjItNGE1My04M2YyLTJlMDFkYmZkOGNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
              </TabPanel>
              <TabPanel>
              <iframe title="Website_Dummy_Forensic" width="100%" height="2800px" src="https://app.powerbi.com/view?r=eyJrIjoiOTFhZmJmODUtMjVkNi00OWRiLWJkY2ItMTQ2ZGNlOTE4MjY5IiwidCI6IjZhYWQ0ZjdlLWQxMjItNGE1My04M2YyLTJlMDFkYmZkOGNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
              <tabel>
            <thead>
              <tr>
              <th style = {{width : "10%"}}>Date Time</th>
           <th style = {{width : "10%"}}>Created By</th>
          <th style = {{width : "10%"}}>Client</th>
          <th style = {{width : "10%"}}>Engagement</th>
          <th style = {{width : "10%"}}>Report Type</th>
          <th style = {{width : "10%"}}>Download.xlsx</th>
          <th style = {{width : "10%"}}>Download.pbix</th>
              </tr>

            </thead>
            <tbody>
          {
            data.map((item, i) => {
              return (
                <>
                <tr key = {i}>
            <td>{item.data_time}</td>
            <td>{item.created_by}</td>
            <td>{item.client}</td>
            <td>{item.engage}</td>
            <td>{item.report}</td>
            <td>
              <button className='download-btn'>
                {item['download.pbix']}
                <img  src = {dropicon} alt = "" />
              </button>
            </td>
            <td>
              <button className='download-btn'>
                {item['download.pbix']}
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
                </>
              )
            })
          }
        
        </tbody>
           </tabel>
              </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
           <TabPanel>
            <div className="tab-container">
              <img src = {comingicon} alt = ""/>
            </div>
           </TabPanel>
             
            </TabPanels>
          </Tabs>
        </div>
    </div>
  )
}

export default Analyse;