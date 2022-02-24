// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHElWpv_01135qYG0VYy3Zqo5nZEcpXZ8',
  authDomain: 'click-a-mole.firebaseapp.com',
  projectId: 'click-a-mole',
  storageBucket: 'click-a-mole.appspot.com',
  messagingSenderId: '461462421107',
  appId: '1:461462421107:web:b6595053e62208b2677406',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
