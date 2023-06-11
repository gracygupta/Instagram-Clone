import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCBuaAdJZwjhrGbIbvHsBuqIrO03gB0cX4",
    authDomain: "circular-matrix-368119.firebaseapp.com",
    projectId: "circular-matrix-368119",
    storageBucket: "circular-matrix-368119.appspot.com",
    messagingSenderId: "864520295461",
    appId: "1:864520295461:web:800b812481bf1f75cddbcc",
    measurementId: "G-G11JEB6LN2"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue }