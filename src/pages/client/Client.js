import React, {useEffect} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import ClientComp from "../../components/client/ClientComp"
// import { getAllEntity, reset } from '../../redux/entity/entitySlice'
// import {useDispatch, useSelector}from "react-redux"
import {useState} from "react"
// import { getAllclient } from '../../redux/client/clientSlice'
const Client = () => {
  // const dispatch = useDispatch();
  // const{entities, isLoading, isError, message, isSuccess} = useSelector((state) => state.entity);
  // const{clients} = useSelector((state) => state.client)
  // const[entityName, setEntityName] = useState([])
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   dispatch(getAllEntity());
  //   dispatch(getAllclient());
  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [isError, message, dispatch]);
  // useEffect(() => {
  //   function getName(){
  //     let name = [];
  //     for(let i =0; i<entities.length; i++){
  //          name.push(entities[i].entity_name);
  //     }
  //      setEntityName([...new Set(name)])
  //   }
  //   getName();
  // }, [])
  // console.log(entities)
  // console.log(clients);
  return (
    <>
    <Header/>
    <div className="body-container">
      <Sidebar/>
      <ClientComp/>
    </div>
    </>
  )
}

export default Client