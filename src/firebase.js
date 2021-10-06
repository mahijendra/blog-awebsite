// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD_oa4fNSy06T0LI4vjWePAjebSQUDg8NA",
    authDomain: "blog-app-4ea82.firebaseapp.com",
    projectId: "blog-app-4ea82",
    storageBucket: "blog-app-4ea82.appspot.com",
    messagingSenderId: "432375191064",
    appId: "1:432375191064:web:56ded9657c45cd7ace956d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export {auth, provider};