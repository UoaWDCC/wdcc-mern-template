import nextConnect from 'next-connect'
import config from '../../lib/config'

const handler = nextConnect()

/** Returns the current config - helps debugging
 * super insecure as will leak environment secrets from teh server
 * disable when not required
 * admin only
 */
handler.get(async (req, res) => {
  res.json(config)
})

export default handler
