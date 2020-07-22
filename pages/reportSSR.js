import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import EventsTable from '../components/EventsTable'

function Report ({ events }) {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      <h1>Results {events.length}</h1>
      <EventsTable events={events} />
    </Layout>
  )
}

// server side rendering - get the data before the page is loaded.
export async function getServerSideProps () {
  // Fetch data from external API
  const res = await fetch(`${config.HOST}/api/events`)
  const events = await res.json()

  // Pass data to the page via props
  return { props: { events } }
}

export default Report
