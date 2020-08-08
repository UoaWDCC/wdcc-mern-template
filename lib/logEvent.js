import fetch from 'node-fetch'
import config from '../lib/config'

export const logEvent = async (event) => {
  await fetch(`${config.HOST}/api/events`, {
    method: 'post',
    body: JSON.stringify(event)
  })

  // TODO handle error if event cannot be posted.
  // TODO display feedback if event is ok
}

export default logEvent
