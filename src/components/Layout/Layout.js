import React from 'react'
 import Header from '../header/Header'
 import "./layout.css"
const Layout = ({children}) => {
  return (
  <>
    <Header />
    <div style={{ minHeight: "80vh" }} className="--pad">
      {children}
    </div>
  </>
  )
}

export default Layout