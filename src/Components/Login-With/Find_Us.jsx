import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Find_Us() {
    return (

        <>

        <div className='my-5'>
            <h1 className='font-medium py-2'>Find Us On</h1>
        
            <div className="join join-vertical  w-full bg-base-100 ">

                <button className='flex items-center  bg-transparent btn join-item justify-start'>
                    <FaFacebook></FaFacebook>
                    <p>Facebook</p>
                </button>

                <button className='flex items-center  bg-transparent btn join-item justify-start'>
                    <FaXTwitter></FaXTwitter>
                    <p>Twitter</p>
                </button>

                <button className='flex items-center  bg-transparent btn join-item justify-start'>
                    <FaInstagram></FaInstagram>
                    <p>Instagram</p>
                </button>

            </div>

            </div>
        </>


    )
}
