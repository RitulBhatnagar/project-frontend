import React from 'react'
import logo from "../../assets/Group.png"
import dashicon from "../../assets/dashicon.png"
import clienticon from "../../assets/clienticon.png"
import engageicon from "../../assets/engageicon.png"
import entityicon from "../../assets/entityicon.png"
import usericon from "../../assets/usericon.png"
import fileicon from "../../assets/fileicon.png"
import "./sidebar.css"
import {Link} from "react-router-dom"
import {useState} from  "react"
const Sidebar = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
  <div className="sidebar">
    <div className="sidebar-content">
      <Link to = "/dashboard">
      <div className = "sidebar-item">
      <img src = {dashicon} alt = "" />
       <h3> Dashboard</h3>
      </div>
      </Link>
      <Link to = "/entity">
      <div className = "sidebar-item">
      <img src = {entityicon} alt = "" />
        <h3>Entity Master</h3>
      </div>
      </Link>
      <Link to = "/client">
      <div className="sidebar-item">
      <img src = {clienticon} alt = "" />
        <h3>client Master</h3>
      </div>
      </Link>
      <Link to = "/engage">
      <div className="sidebar-item">
      <img src = {engageicon} alt = "" />
       <h3> Engagement Master</h3>
      </div>
      </Link>
      <Link to = "/userid">
      <div className="sidebar-item">
      <img src = {usericon} alt = "" />
       <h3> User ID Master</h3>
      </div>
      </Link>
      <Link to = "/data">
      <div className="sidebar-item"
      >
        <img src = {fileicon} alt = "" />
        <h3>Data Upload & Analysis</h3>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default Sidebar;