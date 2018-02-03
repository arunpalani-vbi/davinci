import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyClIA9deJhn3rLS3_TgQ1STWy5XZldPs7s",
    authDomain: "vbi-da-vinci.firebaseapp.com",
    databaseURL: "https://vbi-da-vinci.firebaseio.com",
    projectId: "vbi-da-vinci",
    storageBucket: "vbi-da-vinci.appspot.com",
    messagingSenderId: "685626298086"
};
let firebaseDb = firebase.initializeApp(config).database();
export default firebaseDb;