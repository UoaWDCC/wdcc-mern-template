import Head from 'next/head'
import Header from './header'

function Layout ({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
      </Head>

      <Header user={user} loading={loading} />
      <main className='container mx-auto'>{children}</main>

    </>
  )
}

export default Layout
