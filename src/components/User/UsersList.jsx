import UserCard from "./UserCard"

const UsersList = ({users}) => {
  return (
    <div className="mt-12">
      {users.length === 0 && <p className="text-center mt-10 font-bold">No users yet</p>}
      <div className="mt-2">
        <ul role="list">
          {users.map((user) => {
            return <UserCard user={user} key={Math.random() * 1000} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default UsersList