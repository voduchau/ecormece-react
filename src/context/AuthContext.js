import React, { useState, createContext } from 'react';
import firebaseApp from '../firebase/firebaseApp';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [errLogin, setErrLogin] = useState('')
    const [errRegister, setErrRegister] = useState('')



    const handleLogin = async (email, password) => {
        setErrLogin('')
        await firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            setErrLogin(error.message)
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    }

    const handleRegister = async (email, password) => {
        setErrRegister('')
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('register success')
                return 1
            })
            .catch(error => {
                setErrRegister(error.message)
                return 0
            })
        
    }

    return (
        <AuthContext.Provider value={{ handleLogin, handleRegister, errLogin, errRegister, setErrRegister }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
