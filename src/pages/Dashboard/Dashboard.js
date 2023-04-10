import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import  "./dash.css"
import Header from '../../components/header/Header'
import Dash from '../../components/dashboard/Dash'
const Dashboard = () => {
  return (
 <>
   <Header/>
   <div className="dash-container">
       <Sidebar/>
       <Dash/>
   </div>
 </>
  )
}

export default Dashboard