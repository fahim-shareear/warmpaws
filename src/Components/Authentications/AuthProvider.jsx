import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    


    const googlePopUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

//this one is for creating user with email and password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

//this one is for signing in with email and password.
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


//this is the signout feature.
    const signOutUser = () =>{
        return signOut(auth);
    }



//this one is for putting the guard up if the user is in or out
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);

        });
        return () =>{
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user, createUser, signInUser, signOutUser, googlePopUp, loading

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;