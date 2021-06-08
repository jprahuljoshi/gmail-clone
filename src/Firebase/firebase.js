import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAKGTYaJrY2A-NNBbapfeOvc4_dKMmwdRU",
    authDomain: "clone-900f2.firebaseapp.com",
    projectId: "clone-900f2",
    storageBucket: "clone-900f2.appspot.com",
    messagingSenderId: "942678507291",
    appId: "1:942678507291:web:adc621fa34375852bb5dbe",
    measurementId: "G-Y0Q8EWGJ0J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }