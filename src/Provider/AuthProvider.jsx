import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.init'
export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    // console.log(user);
    
    // create a new user with by register
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // loading statue ;
    const [loading, setLoading] = useState(true)

    // user log in (re-login same user email and password);
    const userLogIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user;
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // update profile;
    const updateProfileData = (updateData) =>{
        return updateProfile(auth.currentUser, updateData )
    }

    // keep user data on the console or firebase;
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loading,
        updateProfileData
    };

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

