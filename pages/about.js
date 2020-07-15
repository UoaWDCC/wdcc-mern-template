import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About () {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>

      <p>Crawl of electricity prices from the MBIE web page.</p>
      <h2 id='brief'>Brief</h2>

      <p>MBIE publish quarterly electricity prices on this page<br />
        <a href='https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/energy-prices/electricity-cost-and-price-monitoring/'>https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/energy-prices/electricity-cost-and-price-monitoring/</a>
      </p>
      <p>in a spreadsheet with link:<br />
        <a href='https://www.mbie.govt.nz/assets/Data-Files/Energy/nz-energy-quarterly-and-energy-in-nz/qsdep-report-15-may-2020.xlsx'>https://www.mbie.govt.nz/assets/Data-Files/Energy/nz-energy-quarterly-and-energy-in-nz/qsdep-report-15-may-2020.xlsx</a>
      </p>
      <p>Using the Retail data in the &#x201C;Raw Data&#x201D; sheet.</p>
      <ul>
        <li>Create a cron job to periodically crawl the &#x201C;Raw data&#x201D; and save in the cloud.</li>
        <li>Adopt serverless architecture to ingest, process, store, handle the request</li>
        <li>Build a simple dashboard to visualize the data</li>
        <li>Practice infrastructure as code</li>
        <li>Deploy frontend and backend to Cloud Environment (frontend needs authentication)</li>
      </ul>

      <h2>Implementation</h2>

      <h3 id='ingestion'>Ingestion</h3>
      <p>We use a serverless function CreatePrices hosted on AWS Lambda to read the source Excel file and convert it to an appropriate JSON data file.</p>
      <p>The lambda is triggered by a CloudWatch (EventBridge) event set on a quarterly schedule. ( shorter for the demonstration). This is AWS recommended method for cron style triggers. </p>
      <p>The resulting output is placed in an S3 Bucket with public read access. </p>
      <p>As the source data is public no api security is required.</p>
      <p>We can also trigger the lambda from the command line ( or a github action ) if we want a manual update.</p>

      <h4 id='curious'>Notes</h4>
      <p>Scraping the spreadsheet from the MBIE page is fragile. The format of the page can change at any time and we don't know exactly when the new reports will be added to the page.</p>
      <p>The asset file names appear to be consistent and predictable so rather than scan the page we can generate the filename according to the current date.</p>
      <p>There is a problem pulling the Excel sheet from the MBIE assets url caused by bad headers - see Bug.md</p>
      <p>The source sheet format does have some fields with missing values - e.g. Queenstown. </p>

      <h2 id='dashboard'>Dashboard Application</h2>
      <p>The client application is implemented using NextJS and React. Next allows us to build a static or dynamic website as required.</p>
      <p>We can deploy the result to Vercel (formally now) without any further work or cost. A similar deployment could be made to an S3 bucket in Web server configuration, Netlify or Github pages.</p>
      <p>Index.js page handles the sign in and the dashboard chart is provided by the PricesChart component. It would be easy to layout and add more charts to the page</p>

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

      <ul>
        <li>Place: list of 42 towns in NZ (rows)</li>
        <li>Month: list of months from Feb 2004 to May 2020 and growing (cols)</li>
        <li>value: c/kWh (cents per kilowatt hour)</li>
      </ul>
      <p>Notes:</p>
      <ul>
        <li>Values change slowly over time, mostly increasing.</li>
        <li>Values vary across the country</li>
      </ul>
      <p>Possible aggregations</p>
      <ul>
        <li>All Place - all of NZ - min,max,mean stats</li>
        <li>regions - towns in NI, SI or TRA</li>
        <li>Time period - year, all time, stats.</li>
      </ul>
      <p>Possible charts</p>
      <ul>
        <li>time series line for each place
          <ul>
            <li>with selectable time base line</li>
            <li>with filter for place.</li>
            <li>with trend lines, noise bands</li>
          </ul>
        </li>
        <li>NZ Map showing price as colour marker or stick
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
      <h4 id='curious-1'>Curious</h4>
      <ul>
        <li>What question are we trying to answer?
          <ul>
            <li>compare current price from place to place</li>
            <li>compare historical price changes</li>
          </ul>
        </li>
        <li>Do we require an Admin page to manage registrations or access?</li>
      </ul>

      <h2 id='time-management'>Time management</h2>
      <ul>
        <li>Only 1.5 days available due to family commitments at weekend.</li>
        <li>email arrived Wednesday at 12 and not seen until Thursday 12.</li>
        <li>No time to adopt unfamiliar stack therefore next/react.</li>
        <li>Thursday planning and design</li>
        <li>Friday implementation</li>
        <li>Sun - documentation.</li>
      </ul>

    </Layout>
  )
}

export default About
