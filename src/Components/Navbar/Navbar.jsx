import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import User from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider'

export default function Navbar() {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li> <NavLink to='/home' className='rounded-sm border'>Home</NavLink> </li>
                        <li> <NavLink to='/about' className='rounded-sm border'>About</NavLink> </li>
                        <li> <NavLink to='/career' className='rounded-sm border'>Career</NavLink> </li>
                    </ul>
                </div>
                <a className="text-xl font-medium"> {user && user.email} </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-2 px-1">
                    <li> <NavLink to='/home' className='rounded-sm border'>Home</NavLink> </li>
                    <li> <NavLink to='/about' className='rounded-sm border'>About</NavLink> </li>
                    <li> <NavLink to='/career' className='rounded-sm border'>Career</NavLink> </li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div>

                    {
                        user && user?.email ?  
                        <div className='flex items-center space-x-2'>
                             <p className='capitalize font-medium'> {user.displayName} </p>
                            <img className='w-8 h-8 rounded-full object-cover' src={user?.photoURL} alt="" />
                    
                        </div>

                        : <img src={User} alt="" />
                    }

                    

                </div>


                {/* user logOut work */}

                {
                    user && user?.email ?
                        <button
                            onClick={logOut}
                            className="btn h-6 min-h-9 px-6 rounded-none btn-neutral">Log Out
                        </button>

                        :

                        <Link to='/auth/login'
                            className="btn h-6 min-h-9 px-6 rounded-none btn-neutral">Login
                        </Link>
                }
            </div>
        </div>
    )
}
