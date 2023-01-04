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
        <section className={`dash_container ${show && 'pl-[5.25rem] md:pl-[15rem]'}`}>
          <Header/>
            {children}
        </section>


    </>
  )
}

export default DashboardWrapper