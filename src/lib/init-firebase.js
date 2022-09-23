import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore'



/* // Import the functions you need from the SDKs you need */
/* // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries */

/* // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional */
const firebaseConfig = {
    apiKey: "AIzaSyC81i_E3agO5pl5OXmhPpDhgJY1rbKhmcQ",
    authDomain: "recipe-project-413fb.firebaseapp.com",
    projectId: "recipe-project-413fb",
    storageBucket: "recipe-project-413fb.appspot.com",
    messagingSenderId: "882892307600",
    appId: "1:882892307600:web:d480778c783646a9ab6c15",
    measurementId: "G-6FMK0MKBL2"
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
