import React from 'react'
import SignIn from './pages/SignIn/SignIn'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import LinkPage from './pages/link/LinkPage'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './pages/Home/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Entity from './pages/entity/Entity'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Client from './pages/client/Client'
import Engage from './pages/engage/Engage'
import UserId from './pages/UserId/UserId'
import Data from './pages/upload/Upload'
import Analysis from './pages/analysis/Analysis'
import Upload from './pages/upload/Upload'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer
      position='bottom-center'
      />
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
         <Route path = "/signIn" element = {<SignIn/>}/>
        <Route path = "/forgotPassword" element = {<ForgotPassword/>}/> 
        <Route path = "/link" element = {<LinkPage/>}/>
        <Route path = "/dashboard" element = {
    
        <Dashboard/>
        }
        />
        <Route path = "/entity" element = {<Entity/>}/>
        <Route path = "/client" element = {<Client/>}/>
        <Route path = "/engage" element = {<Engage/>}/>
        <Route path = "/userid" element = {<UserId/>}/>
        <Route path = "/upload" element = {<Upload/>}/>
        <Route path = "/analysis" element = {<Analysis/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App