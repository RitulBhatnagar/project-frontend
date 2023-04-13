import React from 'react'
import "./dahboard.css"
import chart1 from "../../assets/chart1.png"
import chart2 from "../../assets/chart2.png"
import dropicon from "../../assets/blackdrop.png"
import data from  "./dashBoard.json"
const Dash = () => {
  return (
    <div className='main'>
      <div className="heading-container">
        <h1>Audit Automation Dashboard</h1>
        <p>Good Morning Karan to SPCNXT | transforming Business</p>
      </div>
      <div className="chart-container">
      <img src = {chart1} alt = ""/>
      <img src = {chart2} alt = ""/>
      </div>
      <div className="table-container">
           <tabel>
            <thead>
              <tr>
              <th style = {{width : "8%"}}>Date Time</th>
           <th style = {{width : "8%"}}>Created By</th>
          <th style = {{width : "8%"}}>Client</th>
          <th style = {{width : "8%"}}>Engagement</th>
          <th style = {{width : "8%"}}>Report Type</th>
          <th style = {{width : "8%"}}>Processing Time</th>
          <th style = {{width : "8%"}}>Financial Year</th>
          <th style = {{width : "8%"}}>Download.xlsx</th>
          <th style = {{width : "8%"}}>Download.pbix</th>
              </tr>

            </thead>
            <tbody>
        
           {
            data.map((item, i) => {
              return (
                <>
                  <tr key = {i}>
            <td>{item.date_time}</td>
            <td>{item.created_by}</td>
            <td>{item.client}</td>
            <td>{item.engagement}</td>
            <td>{item.report_type}</td>
            <td>{item.process_time}</td>
            <td>{item.financial_year}</td>
            <td>
              <button className='download-btn'>
                {item['download.xlsx']}
                <img src = {dropicon} alt = "" />
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
      </div>
    </div>
  )
}

export default Dash