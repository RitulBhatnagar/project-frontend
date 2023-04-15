import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UserComp from '../../components/user/UserComp'
import SideMenu from '../../components/sidebar/SideMenu'

const UserId = () => {
  return (
    <>
    <Header/>
    <div className="body-container">
      <SideMenu/>
      <UserComp/>
    </div>
    </>
  )
}

export default UserId