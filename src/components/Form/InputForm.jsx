const InputForm = ({changeInputHandler, placeholder, name, type, value}) => {
  return (
    <div className="mt-10">
      <div>
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type={type}
              name={name}
              id={name}
              autoComplete={name}
              className="px-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder={placeholder}
              onChange={changeInputHandler}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputForm