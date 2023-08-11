import './App.css'
import Form from "./components/Form/Form"
import UsersList from './components/User/UsersList'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])

  const newUserHandler = (newUser) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        newUser
      ]
    })
  }

  return (
    <div className="container mx-auto w-96">
      <Form newUserHandler={newUserHandler}/>
      <UsersList users={users} />
    </div>
  )
}

export default App
