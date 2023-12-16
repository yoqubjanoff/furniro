import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import React from 'react'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <main>
    {<Outlet/>}
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout