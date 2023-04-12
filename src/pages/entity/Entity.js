import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import  "./entity.css"
import Header from '../../components/header/Header'
import EntityComp from '../../components/entity/EntityComp'
import { getAllEntity, reset } from '../../redux/entity/entitySlice'
import {useDispatch, useSelector}from "react-redux"
const Entity = () => {
  // const dispatch = useDispatch();
  // const{entities, isLoading, isError, message, isSuccess} = useSelector((state) => state.entity);
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   dispatch(getAllEntity());
  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [isError, message, dispatch]);
  // console.log(entities);
  return (
    <>
    <Header/>
    <div className="body-container">
      <Sidebar/>
      <EntityComp />
    </div>
    </>
  )
}

export default Entity