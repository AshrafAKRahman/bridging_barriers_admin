"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          console.log("this function is running");
          resolve();
        })
        .catch((error) => {
          const errorCode = error.errorCode;
          const errorMessage = error.errorMessage;
          console.log(errorCode, errorMessage);
          reject(error);
        });
    });
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
