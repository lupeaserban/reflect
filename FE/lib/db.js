import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseInit

function db() {
  if (!firebase.apps.length) {
    firebaseInit = firebase.initializeApp({
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
    })
  }

  return firebaseInit
}

module.exports = { db }


