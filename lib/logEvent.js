import fetch from 'node-fetch'
import config from '../lib/config'

export const logEvent = async (event) => {
  fetch(`${config.HOST}/api/events`, {
    method: 'post',
    body: JSON.stringify(event)
  })
}

export default logEvent
