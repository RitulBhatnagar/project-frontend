import React from 'react'
import "./entitycomp.css"
import editicon from "../../assets/editicon.png"
import delicon from "../../assets/delicon.png"
const EntityComp = () => {
  return (
    <div className='main'>
        <div className="heading-container">
        <h1>Entity Master</h1>
        <p>Please add the details of the entity that you are opening today</p>
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
          <td>U1</td>
            <td>Engagement Report</td>
            <td className = "edit-delete">
              <button className = "edit-btn">
                <img src = {editicon} alt = ""/>  
                Edit
              </button>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>U1</td>
            <td>Engagement Report</td>
            <td className = "edit-delete">
              <button className = "edit-btn">
                <img src = {editicon} alt = ""/>  
                Edit
              </button>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>U1</td>
            <td>Engagement Report</td>
            <td className = "edit-delete">
              <button className = "edit-btn">
                <img src = {editicon} alt = ""/>  
                Edit
              </button>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>U1</td>
            <td>Engagement Report</td>
            <td className = "edit-delete">
              <button className = "edit-btn">
                <img src = {editicon} alt = ""/>  
                Edit
              </button>
              <button className = "del-btn">
                <img src = {delicon} alt = ""/>
               Delete
              </button>
            </td>

          </tr>
          <tr>
          <td>U1</td>
            <td>Engagement Report</td>
            <td className = "edit-delete">
              <button className = "edit-btn">
                <img src = {editicon} alt = ""/>  
                Edit
              </button>
              <button className = "del-btn">
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

export default EntityComp