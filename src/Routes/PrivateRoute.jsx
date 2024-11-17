import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

export default function PrivateRoute({children}) {

    const {user, loading} = useContext(AuthContext)

    // LOCATION INPUT (PATHNAME)
    const location = useLocation()
    console.log(location);
    

    if(loading){
        return <Loading></Loading>
    }


    if (user && user?.email){
        return children;
    }
       
  return (
    <div>
            <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    </div>
  )
}
