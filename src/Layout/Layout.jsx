import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import LatesNews from '../Components/LatesNews'

export default function Layout() {
  return (
    <>
            <Header></Header>
            <Outlet></Outlet>
            
    </>
  )
}
