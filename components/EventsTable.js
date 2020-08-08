import moment from 'moment'

/** Display the table of events
 TODO:
 * format the date/time using moment
 * add styling
 * filter table by person
 * use grid instead of table so it is responsive
 */

export const EventItem = ({ event }) => {
  return (
    <tr>
      <td>{event.name}</td>
      <td>{moment(event.date).fromNow()}</td>
      <td>{event.value}</td>
      <td>{event.comment}</td>
    </tr>
  )
}
export const EventsTable = ({ events }) => {
  return (
    <table>
      <tbody>
        {events.map((el, index) =>
          <EventItem key={el._id} event={el} />
        )}
      </tbody>
    </table>
  )
}

export default EventsTable
