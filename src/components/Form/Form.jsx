import { useState } from 'react'
import Modal from '../Modal/Modal'
import InputForm from './InputForm'

const Form = ({newUserHandler}) => {
  const initialState = {
    username: '',
    imageUrl: '',
    age: ''
  }

  const [newUser, setNewUser] = useState(initialState)

  const [isValid, setIsvalid] = useState({
    username: false,
    imageUrl: false,
    age: false
  })

  const [openModal, setOpenModal] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()

    setIsvalid(() => {
      return {
        username: newUser.username !== "",
        imageUrl: newUser.imageUrl !== "",
        age: newUser.age !== "" && newUser.age > 0
      }
    })

    if (newUser.username === "" || newUser.imageUrl === "" || (newUser.age === "" || newUser.age < 0)) {
      setOpenModal(true)
      return
    }

    setOpenModal(false)
    newUserHandler(newUser)
    setNewUser(initialState)
    event.target.reset()
  }

  const changeInputHandler = (event) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div>
      <form className="mt-10" onSubmit={submitHandler}>
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">Add a Team mate</h2>

            <InputForm changeInputHandler={changeInputHandler} placeholder="jane smith" name="username" type="text" value={newUser.username} />
            <InputForm changeInputHandler={changeInputHandler} placeholder="https://someurl.com/image.jpg" name="imageUrl" type="text" value={newUser.imageUrl} />
            <InputForm changeInputHandler={changeInputHandler} placeholder="23" name="age" type="number" value={newUser.age} />
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-6 border-b border-gray-900/10 pb-12">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>

      <Modal openModal={openModal} setOpenModal={setOpenModal} isValid={isValid} age={newUser.age} />
    </div>
  )
}

export default Form