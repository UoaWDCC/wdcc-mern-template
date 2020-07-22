import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import config from './config'

// TODO: filter to the selected days events
export async function fetchEvents() {

  const res = await fetch(
    `${config.HOST}/api/events`
  )

  const json = await res.json()
  return json
}

export function useFetchEvents ({ required } = {}) {
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window.__events)
  )
  const [events, setEvents] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return window.__events || null
  })

  useEffect(
    () => {
      if (!loading && events) {
        return
      }
      setLoading(true)
      let isMounted = true

      fetchEvents().then((events) => {
        // Only set the events if the component is still mounted
        if (isMounted) {
          setEvents(events)
          setLoading(false)
        }
      })

      return () => {
        isMounted = false
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { events, loading }
}
