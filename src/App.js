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
const App = () => {
  return (
    <div>
      <BrowserRouter>
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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App