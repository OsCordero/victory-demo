import React from "react"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import "./layout.scss"
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  )
}

export default Layout
