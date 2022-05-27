import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp(
  {
    apiKey: "AIzaSyCmc5h546kHbvEJheaO_qeEstl5e0tOfbQ",
    authDomain: "chat-react-fa9d0.firebaseapp.com",
    projectId: "chat-react-fa9d0",
    storageBucket: "chat-react-fa9d0.appspot.com",
    messagingSenderId: "1028937954894",
    appId: "1:1028937954894:web:93399d904a94155016f51f",
    measurementId: "G-M69C32E07P"
  }
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
