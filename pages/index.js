import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'

function Home ({ prices, places }) {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  return (
    <Layout user={user} loading={loading}>
      <h1>WDCC Demonstration App</h1>
      <h2>Demonstration application for WDCC</h2>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To view the dashboard <a href='/api/login'>Login</a>
          </p>
        </>
      )}
      {user && (
        <>
          <ProfileCard user={user} />
        </>)}
    </Layout>
  )
}
export async function getServerSideProps () {
  // const res = await fetch(`${config.S3DATA}/prices.json`)
  // const prices = await res.json()
  // const places = Object.keys(prices.slice(-1)[0])
  // places.shift()
  // // move NZ last so line is on top
  // const nz = places.shift()
  // places.push(nz)
  return {
    props: {
      prices: { a: 1, b: 2 },
      places: ['Auckland', 'Wellington']
    }
  }
}

export default Home
