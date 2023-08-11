const UserCard = ({user}) => {
  return (
    <li key={Math.random() * 100} className="p-10 flex justify-between gap-x-6 py-5 bg-slate-50 mb-6 rounded-lg">
      <div className="flex min-w-0 gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.imageUrl} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{user.username}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.age}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">CEO</p>
      </div>
    </li>
  )
}

export default UserCard