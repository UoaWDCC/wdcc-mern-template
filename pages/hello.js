import Layout from '../components/layout'
import { Greet, Hello } from '../components/Hello'
// React Components can be very very terse
const name = 'Henry'
export default () =>
  <Layout>
    <article>
      <h1>React Hello World</h1>
      <Greet />
      <Hello name={name} />
    </article>
  </Layout>
