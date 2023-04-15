import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import  "./dash.css"
import Header from '../../components/header/Header'
import Dash from '../../components/dashboard/Dash'
import SideMenu from '../../components/sidebar/SideMenu'
const Dashboard = () => {
  return (
 <>
   <Header/>
   <div className="dash-container">
       <SideMenu/>
       <Dash/>
   </div>
 </>
  )
}

export default Dashboard