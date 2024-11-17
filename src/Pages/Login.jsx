import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';


function Login() {

    const {userLogIn, setUser} =useContext(AuthContext)

    // form logIn to hame page or profile data.
        const location = useLocation()
        console.log(location);
        const navigate = useNavigate()

    const handlerSubmitLoginUser =(e) =>{
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        console.log({email, password});

        userLogIn(email, password)
        .then((result) =>{
            const user = result.user;
            navigate(location?.state ? location.state : '/')
            
        }) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("wrong info", errorMessage)
            
          });
        
    }


    return (
        <div className='w-full bg-slate-50 py-10 flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 border">

                <form onSubmit={handlerSubmitLoginUser} className="card-body">

                    <h2 className='font-semibold text-xl text-center'>Login your account</h2>

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input focus:outline-none input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            name='password'
                            type="password"
                            placeholder="Password"
                            className="input focus:outline-none input-bordered" required />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>

                    <div className='text-center'>
                        <p>Don't have an account ? <Link to='/auth/register' className='font-semibold text-[#F75B5F]'>Sing Up</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login