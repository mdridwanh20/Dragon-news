import React from 'react'
import Logo from '../assets/logo.png'
import moment from 'moment'


export default function Header() {
  return (
    <>
        <div className='pt-4 pb-3 space-y-1 px-2 flex items-center flex-col justify-center'>
                <img className='w-full lg:w-96' src={Logo} alt="" />
                <p className='text-gray-600 text-sm'>Journalism Without Fear or Favour</p>
                <p className='text-gray-600 text-sm'> {moment().format("dddd, MMMM Do YYYY,")} </p>
        </div>

    </>
  )
}
