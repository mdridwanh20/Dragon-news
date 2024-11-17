import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function Social_Log() {
  return (
    <div>

      <div className='space-y-2'>
        <div className='flex bg-slate-200 items-center btn'>
          <FaGoogle></FaGoogle>
          <p>login With Google</p>
        </div>

        <div className='flex bg-slate-200 items-center btn'>
          <FaGithub></FaGithub>
          <p>login With Google</p>
        </div>
      </div>
    </div>
  )
}
