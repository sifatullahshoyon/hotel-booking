import React, { createContext, useEffect, useState} from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    };

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    };

    const googleLogin = () => {
        return signInWithPopup(auth , googleProvider);
    };

    const emailVarifacation = () => {
        return sendEmailVerification(auth.currentUser)
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth , email);
    };

    const authInfo = { user , createUser , signIn , googleLogin , emailVarifacation , resetPassword};

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (loggedUser) => {
            console.log(loggedUser);
            setUser(loggedUser);
        })

        return () => {
            unSubscribe();
        };
    } , [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;