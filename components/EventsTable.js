/** Display the table of events
 TODO:
 * format the date/time using moment
 * add styling
 * filter table by person
 * use grid instead of table so it is responsive
 */

export const EventsTable = ({ events }) => {
  return (
    <table>
      <tbody>
        {events.map((el, index) =>
          <tr key={index}>
            <td>{el.name}</td>
            <td>{el.date}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default EventsTable
