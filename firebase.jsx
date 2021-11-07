import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let app = '';

if (!firebase.apps.length)
  app = firebase.initializeApp({
    apiKey: 'AIzaSyAYCeBIjSZyHrAYvoEUmAlx95ZMjHfFTRA',
    authDomain: 'greenery-c083c.firebaseapp.com',
    projectId: 'greenery-c083c',
    storageBucket: 'greenery-c083c.appspot.com',
    messagingSenderId: '318699633794',
    appId: '1:318699633794:web:6c4eb5b3d72c2b317f489b',
  });
else app = firebase.app();
export const auth = app.auth();
export const database = app.database();
export default app;
