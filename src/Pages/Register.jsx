import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

function register() {
    
    const {createNewUser, user, setUser, updateProfileData} = useContext(AuthContext)

    const navigate = useNavigate();

    const handlerFromSubmit = (e) =>{
        e.preventDefault()

        // get form data
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        createNewUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user);
            updateProfileData({displayName: name, photoURL: photo})
            .then(() =>{
                navigate("/");
            })
            .catch((error) =>{
                console.log('ERROR', error);
                
            })
            
        })  
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
          });
        
    }


    return (
        <div className='w-full bg-slate-50 py-10 flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 border">

                <form onSubmit={handlerFromSubmit} className="card-body">
                    <h2 className='font-semibold text-xl text-center'>Sign Up your account</h2>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name='name'
                            type="name"
                            placeholder="Name"
                            className="input focus:outline-none input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name='photo'
                            type="photo"
                            placeholder="Photo"
                            className="input focus:outline-none input-bordered"  />
                    </div>

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
                    </div>

                    <div className='flex items-center space-x-2 my-5'>
                        <input type="checkbox" defaultChecked className="checkbox-xm " />
                        <p>Accept <span className='font-semibold'>Term & Conditions</span></p>
                    </div>

                    <div className="form-control ">
                        <button className="btn btn-neutral">Login</button>
                    </div>

                    <div className='text-center'>
                        <p> I have already account <Link to='/auth/login' className='font-semibold text-[#F75B5F]'>Login</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default register