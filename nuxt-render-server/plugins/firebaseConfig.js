import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBf-WOkCsP9Dqgi8qcJucLgX1f2WwGoUpM",
  authDomain: "vuejs-firebase-01-5a44c.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-01-5a44c.firebaseio.com",
  projectId: "vuejs-firebase-01-5a44c",
  storageBucket: "",
  messagingSenderId: "216486478247",
  appId: "1:216486478247:web:dd3a1ca60402549e"
}
firebase.initializeApp(config);

// export const db = firebase.firestore();

export const db = firebase.database();
