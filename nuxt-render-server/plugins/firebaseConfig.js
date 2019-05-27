import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD4-q9v7Z2KvtsIjWKlxbqx4WaWK9kFv9s',
  authDomain: 'vueadmintemplate2.firebaseapp.com',
  databaseURL: 'https://vueadmintemplate2.firebaseio.com',
  projectId: 'vueadmintemplate2',
  storageBucket: 'vueadmintemplate2.appspot.com',
  messagingSenderId: '320106340910',
  appId: '1:320106340910:web:66609e5fb9074bf3'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
