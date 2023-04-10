import React from 'react'
import "./dahboard.css"
import chart1 from "../../assets/chart1.png"
import chart2 from "../../assets/chart2.png"
import dropicon from "../../assets/dropicon.png"

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
              <th style = {{width : "6%"}}>Date Time</th>
           <th style = {{width : "6%"}}>Created By</th>
          <th style = {{width : "6%"}}>Client</th>
          <th style = {{width : "6%"}}>Engagement</th>
          <th style = {{width : "6%"}}>Report Type</th>
          <th style = {{width : "6%"}}>Processing Time</th>
          <th style = {{width : "6%"}}>Financial Year</th>
          <th style = {{width : "6%"}}>Download</th>
              </tr>

            </thead>
            <tbody>
          <tr>
            <td>24 Mar, 23 15:00</td>
            <td>Karan Gupta</td>
            <td>Microsoft Coporation</td>
            <td>Engagement Report</td>
            <td>Financial Year</td>
            <td>5mins</td>
            <td>2022-23</td>
            <td>
              <button className='download-btn'>
                Download
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
          <tr>
            <td>24 Mar, 23 15:00</td>
            <td>Karan Gupta</td>
            <td>Microsoft Coporation</td>
            <td>Engagement Report</td>
            <td>Financial Year</td>
            <td>5mins</td>
            <td>2022-23</td>
            <td>
              <button className='download-btn'>
                Download
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
          <tr>
            <td>24 Mar, 23 15:00</td>
            <td>Karan Gupta</td>
            <td>Microsoft Coporation</td>
            <td>Engagement Report</td>
            <td>Financial Year</td>
            <td>5mins</td>
            <td>2022-23</td>
            <td>
              <button className='download-btn'>
                Download
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
          <tr>
            <td>24 Mar, 23 15:00</td>
            <td>Karan Gupta</td>
            <td>Microsoft Coporation</td>
            <td>Engagement Report</td>
            <td>Financial Year</td>
            <td>5mins</td>
            <td>2022-23</td>
            <td>
              <button className='download-btn'>
                Download
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
          <tr>
            <td>24 Mar, 23 15:00</td>
            <td>Karan Gupta</td>
            <td>Microsoft Coporation</td>
            <td>Engagement Report</td>
            <td>Financial Year</td>
            <td>5mins</td>
            <td>2022-23</td>
            <td>
              <button className='download-btn'>
                Download
                <img src = {dropicon} alt = "" />
              </button>
            </td>

          </tr>
        </tbody>
           </tabel>
      </div>
    </div>
  )
}

export default Dash