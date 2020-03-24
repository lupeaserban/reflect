import firebase from 'firebase/app'
import 'firebase/firestore'

try {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const firestore = firebase.firestore()

export default { firebase, firestore }

// function db() {
//   if (!firebase.apps.length) {
//     firebaseInit = firebase.initializeApp({
//         apiKey: process.env.apiKey,
//         authDomain: process.env.authDomain,
//         projectId: process.env.projectId,
//     })
//   }

//   return firebaseInit
// }

// module.exports = { db }


