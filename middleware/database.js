import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'
import config from '../lib/config'

const client = new MongoClient(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function database (req, res, next) {
  // console.log('connecting to mongo', config.MONGODB_URI)
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db(config.DB_NAME)
  // console.log(req.db)
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
