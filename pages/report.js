import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import EventsTable from '../components/EventsTable'
import { useState, useEffect } from 'react'

function Report () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: true })
  const [events, setEvents] = useState([])
  // fetch data
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${config.HOST}/api/events`)
      const evts = await res.json()
      setEvents(evts)
    }
    fetchEvents()
  }, [])

  return (
    <Layout user={user} loading={loading}>
      <h1>Results {events.length}</h1>
      <EventsTable events={events} />
    </Layout>
  )
}

export default Report
