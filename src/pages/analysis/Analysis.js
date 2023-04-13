import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import DataComp from '../../components/data/DataComp'
import { useLocation } from 'react-router-dom'
const Analysis = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
   <Header/>
   <div className="body-container">
    <Sidebar/>
    <DataComp/>
    </div> 
    </>
  )
}

export default Analysis