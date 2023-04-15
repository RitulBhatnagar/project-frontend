import React from 'react'
import excelicon from "../../assets/excel-icon.png"
import pbxicon from "../../assets/pb-icon.png"
import "./analyis.css"
const IconContainer = () => {
  return (
    <div className="iconContainer">
    <img className = "download-icon" src = {excelicon} alt = ""/>
    <img className = "download-icon" src = {pbxicon} alt = ""/>
  </div>
  )
}

export default IconContainer