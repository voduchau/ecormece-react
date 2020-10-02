import React, { createContext} from 'react';
import firebaseApp from '../firebase/firebaseApp';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    
    const handleLogin = async (email, password) => {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            console.log(error.message, 'error when login')
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }

    return ( 
        <AuthContext.Provider value={{handleLogin}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;
