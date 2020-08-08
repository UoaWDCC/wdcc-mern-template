import nextConnect from 'next-connect'
import fetch from 'node-fetch'

/* Demonstrates fetching data from a third party API call
*/

const handler = nextConnect()
const peopleService = 'https://randomuser.me'

handler.get(async (req, res) => {
  const count = req.query.count || 1 // always backstop query parameters
  const url = `${peopleService}/api/?results=${count}`
  const doc = await fetch(url)
  const json = await doc.json(doc)
  // console.log(json.results)
  res.json(json.results)
})

export default handler
