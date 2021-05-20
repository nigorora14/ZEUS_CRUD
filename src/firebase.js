import firebase from 'firebase/app'
import 'firebase/firestore'

//La configuración de Firebase de su aplicación web
const  firebaseConfig = {
    apiKey: "AIzaSyDG49TXoDO6aVhRvGpwEAJ9KyaIXKOnge0",
    authDomain: "crud-660a8.firebaseapp.com",
    projectId: "crud-660a8",
    storageBucket: "crud-660a8.appspot.com",
    messagingSenderId: "145281840912",
    appId: "1:145281840912:web:a31b60698c48772c50d795"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)