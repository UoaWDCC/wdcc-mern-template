export const ProfileCard = ({ user, children }) => {
  return (
    <div className='max-w-sm flex my-4 bg-white rounded-lg shadow-xl'>
      <div className='flex-shrink-0'>
        <img className='h-32 w-32 rounded-l-lg' src={user.picture} alt='user picture' />
      </div>
      <div className='flex-col flex-grow'>
        <div className='ml-6 pt-1'>
          <h4 className='text-xl text-gray-900 leading-tight'>{user.name}</h4>
          <p className='text-base text-gray-600 leading-normal'>{user.nickname}</p>
        </div>
        <div className='ml-6 mr-1 '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
