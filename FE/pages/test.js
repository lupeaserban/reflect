
import Layout from '../components/Layout'
import { db } from '../lib/db.js'

export default function Test({ locations }) {
  return (
    <Layout>
       <ul>
      {
      locations.map(location => (
        <li key ='1' >{location.name}</li>
      ))}
    </ul>
    </Layout>
  );
}

 export async function getStaticProps() {
  let firebase = await db()
  let locations = []
  await firebase.firestore().collection('locations').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        locations.push(doc.data())
    })
      return locations
    })
    .catch(err => console.log('err', err))

    return {
      props: {
        locations
      }
    }
}