import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase.config';
export const AuthContext= createContext();
const AuthProvaider=({children})=> {
    const [user,setUser]=useState(null)
    console.log(user);
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut=()=>{

        return signOut(auth);
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])
    
    const authData={
        user,setUser,createUser,LogOut,logIn,
    }
  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvaider