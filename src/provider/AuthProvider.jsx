import React, {useEffect, useState} from "react";
import {AuthContext} from "./Context";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {auth} from "../firebase/firebase.config";
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  const GoogleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    const userProfile = {
      displayName: name,
      photoURL: photo,
    };
    
    return updateProfile(auth.currentUser, userProfile);
  };
  const loginUser = (email, password) => {
        setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logOutUser = () => {
        setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
        setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      } else {
        setUser(null);
        setLoading(false)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    createUser,
    loginUser,
    logOutUser,
    updateUserProfile,
    forgetPassword,
    signInWithGoogle,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
