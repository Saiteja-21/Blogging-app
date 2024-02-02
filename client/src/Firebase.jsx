
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyATH3VyOZro70oQNLG8iUu-2ZqLxIzLfYE",
  authDomain: "blogging-app-b9c2e.firebaseapp.com",
  projectId: "blogging-app-b9c2e",
  storageBucket: "blogging-app-b9c2e.appspot.com",
  messagingSenderId: "264032901185",
  appId: "1:264032901185:web:81e01a6eeb9ed7d8ed0ec0"
};


const app = initializeApp(firebaseConfig); 
const auth=getAuth(app);
const provider=new GoogleAuthProvider() 

 export {auth,provider}
