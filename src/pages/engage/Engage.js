import React from 'react'
import EngageComp from '../../components/engage/EngageComp'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
const Engage = () => {
  return (
    <>
    <Header/>
    <div className="body-container">
      <Sidebar/>
      <EngageComp/>
    </div>
    </>
  )
}

export default Engage