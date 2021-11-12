import { getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAYCeBIjSZyHrAYvoEUmAlx95ZMjHfFTRA',
  authDomain: 'greenery-c083c.firebaseapp.com',
  projectId: 'greenery-c083c',
  storageBucket: 'greenery-c083c.appspot.com',
  messagingSenderId: '318699633794',
  appId: '1:318699633794:web:6c4eb5b3d72c2b317f489b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();
