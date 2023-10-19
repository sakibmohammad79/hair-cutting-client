import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null); 
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    console.log(user)

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const googleLogInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const GithubAuthProviders = new GithubAuthProvider();
    const githubLogInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubAuthProviders)
    }

    const updateUserProfile = (name, photoURL) => {
           return updateProfile(auth.currentUser, {
            displayName: {name}, photoURL: {photoURL}
          })
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubsCribe();
        }
    },[auth])

    const userInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogInUser,
        githubLogInUser,
        updateUserProfile,
        logOut

    }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;