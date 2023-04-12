import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import DataComp from '../../components/data/DataComp'

const Data = () => {
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

export default Data