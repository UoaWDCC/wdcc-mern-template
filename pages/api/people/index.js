import nextConnect from 'next-connect'
import fetch from 'node-fetch'

const handler = nextConnect()
const peopleService = 'https://randomuser.me'

handler.get(async (req, res) => {
  // find returns a cursor which we need to iterate through to get the results.
  // use next or toArray
  console.log('people.get', req.query)
  const count = req.query.count || 1
  const url = `${peopleService}/api/?results=${count}`
  const doc = await fetch(url)
  const json = await doc.json(doc)
  console.log(json.results)
  res.json(json.results)
})

export default handler
