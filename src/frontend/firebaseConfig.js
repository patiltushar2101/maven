import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCCXrtdSIvw0ydrsnofBGJGRbXdkpzoog0",
    authDomain: "maven-57cb2.firebaseapp.com",
    projectId: "maven-57cb2",
    storageBucket: "maven-57cb2.appspot.com",
    messagingSenderId: "821300584363",
    appId: "1:821300584363:web:1b34920082670c9a65fcee"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
