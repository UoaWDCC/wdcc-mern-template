import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About () {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <article>
        <h1>Project Brief</h1>

        <h2>The Problem to solve</h2>
        <p>explanation</p>
        <ul>
          <li>Task list</li>
          <li>Adopt serverless architecture to ingest, process, store, handle the request</li>
          <li>Build a simple dashboard to visualize the data</li>
          <li>Deploy frontend and backend to Cloud Environment (frontend needs authentication)</li>
        </ul>

        <h2>Implementation</h2>

        <h3 id='dashboard'>Dashboard Application</h3>
        <p>The client application is implemented using NextJS and React. Next allows us to build a static or dynamic website as required.</p>
        <p>We can deploy the result to Vercel (formally now) without any further work or cost. A similar deployment could be made to an S3 bucket in Web server configuration, Netlify or Github pages.</p>
        <p>Index.js page handles the sign in and the dashboard chart is provided by the chart component. It would be easy to layout and add more charts to the page</p>

        <h3>Authentication</h3>
        <p>The brief calls for access control and authentication but has no details on how registration should be managed. </p>
        <p>The implementation uses the third party Identity management service Auth0. (free for personal projects)</p>
        <p>This allows people requiring access to the site to sign in using Social Media identity (Google, Github etc) or to create a username and password. We allow all authenticated people access to the system.</p>

        <h3>Data management</h3>
        <p>We have three alternative data management routes </p>
        <p>Build Time: The data set is obtained in a getStaticProps call for the index page and provided to the display component. This means that the data is fetched from the bucket at build time. This is the fastest option but would require a rebuild/redeploy of the site when the data is updated. Doable given the data only changes quarterly.</p>
        <p>Server Side Render Time: The data set is obtained in a getServerSideProps call for the index page and provided to the display component. This means that the data is fetched from the bucket at build time. This is the fastest option but would require a rebuild/redeploy of the site when the data is updated. Doable given the data only changes quarterly.</p>
        <p>Client side: we fetch from the S3 bucket on page render - slowest.</p>

        <h4 id='visualisation'>Visualisation</h4>
        <p>Data Dimensions</p>
        <p>Possible charts</p>
        <ul>
          <li>time series line for each place
            <ul>
              <li>with selectable time base line</li>
              <li>with filter for event type.</li>
              <li>with trend lines, noise bands</li>
            </ul>
          </li>
          <li>NZ Map showing events as colour marker or stick
            <ul>
              <li>with slider for timebase, auto player</li>
              <li>with zoom?</li>
              <li>would need lat/long of towns.</li>
            </ul>
          </li>
        </ul>
        <h3 id='deployment'>Deployment</h3>

        <ul>
          <li>deploy from github repo on changes</li>
          <li>use GH action to deploy.
          </li>
          <li>Deploy to cloud using Vercel? - selected</li>
        </ul>
        <h3 id='visual-style'>Visual style</h3>
        <ul>
          <li>css, tailwind for simple page layout</li>
          <li>milligram? - nice basic typography - selected</li>
        </ul>
        <h2 id='time-management'>Time management</h2>
        <ul>
          <li>Only 1.5 days available after the tutorials.</li>
          <li>Saturday Wireframe and components</li>
          <li>Sun API and data.</li>
        </ul>
      </article>
    </Layout>
  )
}

export default About
