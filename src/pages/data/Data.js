import React,{useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import DataComp from '../../components/data/DataComp'
import {useLocation} from "react-router-dom"

const Data = () => {
  const location = useLocation();
  const[word, setWord] = useState("");
 useEffect(() => {
  function getWord(){
    if(String(location.pathname) === "/upload"){
      setWord("upload")
    }
    else{
      setWord("analysis")
    }
  }

    getWord();
  } , [location])
  console.log(word);
  return (
    <>
   <Header/>
   <div className="body-container">
    <Sidebar/>
    <DataComp word = {word}/>
    </div> 
    </>
  )
}

export default Data