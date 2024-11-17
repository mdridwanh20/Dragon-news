import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import Social_Log from './Social_Log'
import Find_Us from './Find_Us'

export default function Login_With() {
  return (
    <div>
      <h1 className='font-medium py-5'>Login With</h1>

        <Social_Log></Social_Log>
        <Find_Us></Find_Us>

    </div>
  )
}
