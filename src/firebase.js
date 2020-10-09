import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBIKq1FIY0cpoNuqLR701NwyHx8NwsEPcw",
    authDomain: "clo-c068c.firebaseapp.com",
    databaseURL: "https://clo-c068c.firebaseio.com",
    projectId: "clo-c068c",
    storageBucket: "clo-c068c.appspot.com",
    messagingSenderId: "449435434343",
    appId: "1:449435434343:web:491d8decaa08842252c3c2",
    measurementId: "G-PY9MCPNVP8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
