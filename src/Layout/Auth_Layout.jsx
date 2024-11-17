import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function Auth_Layout() {
    return (
        <div className=''>
            <div className='container m-auto'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
