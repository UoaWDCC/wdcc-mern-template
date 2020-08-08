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
    <div className='max-w-sm flex my-4 bg-white rounded-lg shadow-md mx-4'>
      <div className='ml-2 pt-1'>
        <h4 className='text-xl text-gray-900 leading-tight'>{event.name}</h4>
        <p className='text-base text-gray-600 leading-normal'>{moment(event.date).fromNow()}</p>
        <p className='text-base text-gray-600 leading-normal'>{event.value}</p>
        <p className='text-base text-gray-600 leading-normal'>{event.comment}</p>
      </div>
    </div>
  )
}

export const EventsTable = ({ events }) => {
  return (
    <div className='flex flex-wrap'>
      {events.map((el, index) =>
        <div key={el._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 '>
          <EventItem event={el} />
        </div>

      )}
    </div>
  )
}

export default EventsTable
