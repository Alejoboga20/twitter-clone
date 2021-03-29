// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC2CKiqaPEy_PS0BHYwLWjn27i0gezN_hQ',
  authDomain: 'twitter-clone-fe0f3.firebaseapp.com',
  projectId: 'twitter-clone-fe0f3',
  storageBucket: 'twitter-clone-fe0f3.appspot.com',
  messagingSenderId: '904061767927',
  appId: '1:904061767927:web:a8e777e13274904b4b83f2',
  measurementId: 'G-1X1GENKP44'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
