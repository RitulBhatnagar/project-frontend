import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import Analyse from '../../components/analyse/Analyse'
import SideMenu from '../../components/sidebar/SideMenu'
const Analysis = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
   <Header/>
   <div className="body-container">
    <SideMenu/>
    <Analyse/>
    </div> 
    </>
  )
}

export default Analysis