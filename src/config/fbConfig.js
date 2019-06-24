import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyCQ8McHcyT6pc2ImmJTXhwTzSBiiICOMSM',
  authDomain: 'migle-f6520.firebaseapp.com',
  databaseURL: 'https://migle-f6520.firebaseio.com',
  projectId: 'migle-f6520',
  storageBucket: 'migle-f6520.appspot.com',
  messagingSenderId: '369059285768',
  appId: '1:369059285768:web:b2ca2de4aae44f8e'
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
