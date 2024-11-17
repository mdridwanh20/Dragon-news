import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Login_With from '../Components/Login-With/Login_With'
import { Link, useLoaderData } from 'react-router-dom'

export default function NewsDetails() {

    const data = useLoaderData()
    const newsDetails = data.data[0]
    console.log(newsDetails);



    return (
        <>
            <div className='container m-auto'>

                <div className=''>
                    <Navbar></Navbar>
                </div>



                <div className='grid grid-cols-12 gap-10'>

                    <div className='col-span-9 '>


                        <div className="card bg-base-100">
                            <h1 className='font-medium ms-10 py-5'>Dragon News</h1>

                            <figure className="px-10 pt-10">
                                <img
                                    src={newsDetails?.image_url}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title"> {newsDetails?.title}</h2>

                                <p>{newsDetails?.details}</p>

                                <div className=" my-5 card-actions">
                                    <Link to={`/category/${newsDetails?.category_id}`} className="btn text-white hover:bg-[#d72050] hover:white rounded-sm font-medium bg-[#D72050] ">All news in this category</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-span-3'>
                        <Login_With></Login_With>
                    </div>
                </div>
            </div>

        </>
    )
}
