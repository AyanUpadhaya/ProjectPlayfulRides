import React, { createContext, useEffect, useState } from 'react';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
     } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createNewUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name,imgUrl)=>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL: imgUrl})
    }
    const userLogin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const authInfo = {
        user,
        createNewUser,
        updateUserProfile,
        loading,
        logOut,
        userLogin,
        googleSignIn
    }
    //user observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;