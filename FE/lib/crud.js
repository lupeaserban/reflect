import { db,  } from './db'

async function getAllLocations() {
  const locationsRef = db.collection('locations');
  let data = await locationsRef.get()
    .then(snapshot => {
      const allLocations = []
      snapshot.forEach(doc => {
        allLocations.push(doc.data())

      });
      return allLocations
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    return data
}

module.exports = { getAllLocations }

