import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UserComp from '../../components/user/UserComp'

const UserId = () => {
  return (
    <>
    <Header/>
    <div className="body-container">
      <Sidebar/>
      <UserComp/>
    </div>
    </>
  )
}

export default UserId