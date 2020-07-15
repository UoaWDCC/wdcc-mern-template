// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'

const ProfileCard = ({ user }) => {
  return (
    <div class='max-w-sm flex  bg-white rounded-lg shadow-xl'>
      <div class='flex-shrink-0'>
        <img class='h-32 w-32 rounded-l-lg' src={user.picture} alt='user picture' />
      </div>
      <div class='ml-6 pt-1'>
        <h4 class='text-xl text-gray-900 leading-tight'>{user.name} </h4>
        <p class='text-base text-gray-600 leading-normal'>{user.nickname}</p>
      </div>
    </div>
  )
}

function Profile () {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</>
        : (
          <>
            <ProfileCard user={user} />
          </>)}
    </Layout>
  )
}

export default Profile
