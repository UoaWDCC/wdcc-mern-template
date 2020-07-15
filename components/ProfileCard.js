export const ProfileCard = ({ user }) => {
  return (
    <div class='max-w-sm flex  bg-white rounded-lg shadow-xl'>
      <div class='flex-shrink-0'>
        <img class='h-32 w-32 rounded-l-lg' src={user.picture} alt='user picture' />
      </div>
      <div class='ml-6 pt-1'>
        <h4 class='text-xl text-gray-900 leading-tight'>{user.name} </h4>
        <p class='text-base text-gray-600 leading-normal'>{user.nickname}</p>
      </div>
    </div>
  )
}

export default ProfileCard
