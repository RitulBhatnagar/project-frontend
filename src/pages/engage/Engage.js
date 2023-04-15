import React from 'react'
import EngageComp from '../../components/engage/EngageComp'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import SideMenu from '../../components/sidebar/SideMenu'
const Engage = () => {
  return (
    <>
    <Header/>
    <div className="body-container">
      <SideMenu/>
      <EngageComp/>
    </div>
    </>
  )
}

export default Engage