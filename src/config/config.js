import firebase from 'firebase'
import 'firebase/analytics'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyAChKXcTRtl-QwJooRiUonzz6MAzmMNXb0",
  authDomain: "where-is-game.firebaseapp.com",
  projectId: "where-is-game",
  storageBucket: "where-is-game.appspot.com",
  messagingSenderId: "589224617326",
  appId: "1:589224617326:web:d8f7e6492e1fbeea3c0d7f",
  measurementId: "G-NFLG6QGSHD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase