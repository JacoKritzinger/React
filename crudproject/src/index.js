import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCmrctntUo0wiaMWJX3MYCeMvuECFCHV_g",
  authDomain: "crudproject-62738.firebaseapp.com",
  projectId: "crudproject-62738",
  storageBucket: "crudproject-62738.appspot.com",
  messagingSenderId: "390545185288",
  appId: "1:390545185288:web:b38f8e6be598bea948cfbd",
  measurementId: "G-4BB6DHTWVS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
