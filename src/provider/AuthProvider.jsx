import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //console.log(user);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const googleLogInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const GithubAuthProviders = new GithubAuthProvider();
  const githubLogInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubAuthProviders);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((res) => {
            //console.log(res.data.token);
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      
    });
    return () => {
      return unsubsCribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLogInUser,
    githubLogInUser,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
