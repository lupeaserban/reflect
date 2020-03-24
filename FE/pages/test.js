
import Layout from '../components/Layout'
import fetch from 'node-fetch'
import { db } from '../lib/db.js'

export default function Test({ locations }) {
  return (
    <Layout>
       <ul>
         {console.log(locations)}
      {/* {
      locations.map(location => (
        <li key ='1' >{location.name}</li>
      ))} */}
    </ul>
    </Layout>
  );
}

 export async function getStaticProps() {
   const resp = await fetch('http://localhost:3000/api/location')
   const locations = await resp.json()
   return {
    props: {
      locations
    },
  }
  // let firebase = await db()
  // let locations = []
  // await firebase.firestore().collection('locations').get()
  //   .then(snapshot => {
  //     snapshot.forEach(doc => {
  //       locations.push(doc.data())
  //   })
  //     return locations
  //   })
  //   .catch(err => console.log('err', err))

  //   return {
  //     props: {
  //       locations
  //     }
  //   }
}