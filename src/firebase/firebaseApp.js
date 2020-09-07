import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA561K1b0ivUR7bldkEpu82dX2BeID9XjQ",
    authDomain: "ecormece-3cb01.firebaseapp.com",
    databaseURL: "https://ecormece-3cb01.firebaseio.com",
    projectId: "ecormece-3cb01",
    storageBucket: "ecormece-3cb01.appspot.com",
    messagingSenderId: "703236745426",
    appId: "1:703236745426:web:0452d19038e01bc87fa50b",
    measurementId: "G-FYW8825ZVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
