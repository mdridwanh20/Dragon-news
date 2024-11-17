import React from 'react'
import LatesNews from '../Components/LatesNews'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ALL_Category from '../Components/ALL-Category/ALL_Category'
import News_Home from '../Components/News-Home/News_Home'
import Login_With from '../Components/Login-With/Login_With'

export default function Home() {
    return (
        <div className='container m-auto px-2'>
            <LatesNews></LatesNews>
            <Navbar></Navbar>
            

            <div className='grid grid-cols-12 gap-6 py-10'>

                <div className='col-span-3'>
                    <ALL_Category ></ALL_Category>
                </div>

                <div className='col-span-6'>
                    <News_Home ></News_Home>
                    <Outlet></Outlet>
                </div>

                <div className='col-span-3'>
                    <Login_With></Login_With>
                </div>

            </div>

        </div>
    )
}
