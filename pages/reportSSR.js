import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import EventsTable from '../components/EventsTable'
import { useState } from 'react'

const fetchEvents = async () => {
  const res = await fetch( `${config.HOST}/api/events` )
  return res.json()
}

function Report ({ serverEvents }) {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: true })
  const [ events, setEvents ] = useState([])
  // fetch data
  useEffect(() => {
    const evts = await fetchEvents()
    setEvents(evts)
  }, [])

  return (
    <Layout user={user} loading={loading}>
      <h1>Results</h1>

      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>
          <p>
            To view the results <a href='/api/login'>Login</a>
          </p>
        </>
      )}
      {user && (
        <EventsTable user={user} events={events} />
      )}
    </Layout>
  )
}

// server side rendering - get the data before the page is loaded.
export async function getServerSideProps () {
  // Fetch data from external API
  const res = await fetch(`${config.HOST}/api/events`)
  const events = await res.json()

  // Pass data to the page via props
  return { props: { serverEvents } }
}

export default Report
