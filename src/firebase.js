import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZ3ULN7z6jOWZOHfQK9Hgb-k0XHWYFT2U",
  authDomain: "comentaki-kolisiumbits.firebaseapp.com",
  databaseURL: "https://comentaki-kolisiumbits.firebaseio.com",
  projectId: "comentaki-kolisiumbits",
  storageBucket: "comentaki-kolisiumbits.appspot.com",
  messagingSenderId: "485355592862",
  appId: "1:485355592862:web:d6d3e544c472a3a1acef8f"
};

firebase.initializeApp(firebaseConfig)

export default firebase