import nextConnect from 'next-connect'
import mongodb from '../../../middleware/database'

const handler = nextConnect()

handler.use(mongodb)
/* Event schema
  {
    date: timestamp when record created
    value: value of the record.
  }
*/
handler.get(async (req, res) => {
  // find returns a cursor which we need to iterate through to get the results.
  // use next or toArray
  const doc = await req.db.collection('events').find({name: req.query.name}).toArray()
  // console.log(doc)
  res.json(doc)
})

export default handler
