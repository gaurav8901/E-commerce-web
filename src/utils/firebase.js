import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4RhkSlW1eiyKEVDzDjK_Ufqto51A5_jA",
    authDomain: "e-commerce-web-c1cd6.firebaseapp.com",
    projectId: "e-commerce-web-c1cd6",
    storageBucket: "e-commerce-web-c1cd6.appspot.com",
    messagingSenderId: "393238537131",
    appId: "1:393238537131:web:bb4ebf5d8cef8819e0e8ee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};