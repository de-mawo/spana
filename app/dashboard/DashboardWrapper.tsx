'use client'

import { useState } from "react"
import Header from "./Header"
import SideBar from "./SideBar"



const DashboardWrapper = ({children}: any) => {
    const [show, setShow] = useState(false)
    const showSideBar = () => {
        setShow(!show)
    }
  return (
    <>
        <SideBar show={show} showSideBar={showSideBar}/>
        <section className={`dash_container ${show && 'add_body_padding'}`}>
          <Header/>
            {children}
        </section>


    </>
  )
}

export default DashboardWrapper