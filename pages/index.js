import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import ProfileCard from '../components/ProfileCard'
import EventForm from '../components/EventForm'
import { logEvent } from '../lib/logEvent'

import Link from 'next/link'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  const handleClick = (e) => {
    // console.log(e.target)
    const event = {
      name: user.nickname,
      type: 'click',
      value: 1
      // date: added server side so we can't lie
    }
    logEvent(event)
  }
  return (
    <Layout user={user} loading={loading}>
      <h1>Page heading</h1>
      <p>Interesting content here</p>

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
          <ProfileCard user={user}>
            <button className='btn-blue' onClick={handleClick}>Event</button>
          </ProfileCard>
          <h2>Event Form</h2>
          <EventForm user={user} />
          <h2>Reports</h2>
          <LinkA href='/report'>Report - useEffect</LinkA>
          <LinkA href='/reportSSR'>Report - SSR</LinkA>
          <LinkA href='/reportSWR'>Report - SWR</LinkA>

        </>)}
    </Layout>
  )
}

export default Home
