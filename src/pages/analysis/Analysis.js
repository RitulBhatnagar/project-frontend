import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import Analyse from '../../components/analyse/Analyse'
const Analysis = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
   <Header/>
   <div className="body-container">
    <Sidebar/>
    <Analyse/>
    </div> 
    </>
  )
}

export default Analysis