import firestore from './db'

async function getAllLocations() {
  const db = await firestore.firestore()
  var locationsRef = db.collection('locations');
  var allLocations = []
  locationsRef.get()
    .then(snapshot => {
      console.log(snapshot)
      snapshot.forEach(doc => {
        console.log('here')
        allLocations.push(doc.data())
        //console.log(doc.id, '=>', doc.data());
      });
      return allLocations
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

module.exports = { getAllLocations }

