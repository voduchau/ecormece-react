import React, { useState, createContext, useEffect } from 'react';
import firebaseApp from '../firebase/firebaseApp';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [errLogin, setErrLogin] = useState('')
    const [errRegister, setErrRegister] = useState('')
    const [user, setUser] = useState(null)

    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              setUser(user)
              console.log(user,'user da login')
            } else {
              // No user is signed in.
              setUser(null)
              console.log('user chua logn')
            }
          });
    },[])

    const handleLogin = async (email, password) => {
        setErrLogin('')
        return await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log(data,'login success')
            setUser(data.user)
            return 1
        })
        .catch(function (error) {
            setErrLogin(error.message)
            console.log('error when login')
            return 0
        });
    }

    const handleRegister = async (email, password) => {
        setErrRegister('')
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data.user.displayName,'register success with data display name')
                firebaseApp.database().ref('users/' + data.user.uid).set({
                    displayName: data.user.displayName ? data.user.displayName : '',
                    email: data.user.email,
                    phoneNumber: data.user.phoneNumber ? data.user.phoneNumber : '',
                    photoURL: data.user.photoURL ? data.user.photoURL : '',
                    emailVerified: data.user.emailVerified ? data.user.emailVerified : '',
                    password: password,
                    isAdmin: false
                    })
                return 1
            })
            .catch(error => {
                setErrRegister(error.message)
                return 0
            })
    }

    const handleLogOut = () => {
        firebaseApp.auth().signOut().then(function() {
            setUser(null)
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <AuthContext.Provider value={{ handleLogOut, user, handleLogin, handleRegister, errLogin, errRegister, setErrRegister }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
