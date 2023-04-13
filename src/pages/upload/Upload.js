import React,{useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UploadComp from '../../components/Upload/UploadComp'
import {useLocation} from "react-router-dom"

const Upload = () => {
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
    <UploadComp word = {word}/>
    </div> 
    </>
  )
}

export default Upload