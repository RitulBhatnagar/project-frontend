import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import  "./entity.css"
import Header from '../../components/header/Header'
import EntityComp from '../../components/entity/EntityComp'
const Entity = () => {
  return (
    <>
    <Header/>
    <div className="entity-container">
      <Sidebar/>
      <EntityComp/>
    </div>
    </>
  )
}

export default Entity