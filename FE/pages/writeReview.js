
import Layout from '../components/Layout'
import fetch from 'node-fetch'
//import { db } from '../lib/db.js'

export default function WriteReview({ locations }) {
  return (
    <Layout>
      <ul>
        {
          locations.locations.map(location => (
            <li key='1' >{location.name}</li>
          ))}
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
}