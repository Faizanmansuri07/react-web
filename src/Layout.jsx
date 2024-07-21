import React from 'react'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
          <Header/>
          <Outlet/>
          <Footer/>
    </>
 
  )
}

export default Layout