import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import EventsTable from '../components/EventsTable'
import useSWR from 'swr'
import Spinner from '../components/Spinner'

const fetcher = (...args) => fetch(...args).then(res => res.json())

/** Demonstrate Next SWR
 * https://swr.vercel.app/
 */

function Report () {
  const { user, loading } = useFetchUser({ required: true })
  const { data, error } = useSWR(`${config.HOST}/api/events`, fetcher)
  // render data
  return (
    <Layout user={user} loading={loading}>
      <h1>Results {loading && <Spinner />} {data && data.length}</h1>
      {error && <p className='panel-error'>Failed to load event data</p>}
      {data && <EventsTable events={data} />}
    </Layout>
  )
}

export default Report
