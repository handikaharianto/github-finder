import { useState } from 'react'
import { useAlert } from '../../context/alert/AlertContext'
import { useGithub } from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
  const { users, dispatch } = useGithub()
  const { setAlert } = useAlert()
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something!', 'error')
    } else {
      dispatch({ type: 'FETCH_INIT' })

      // search users based on input field
      searchUsers(text)
        .then(({ items }) => dispatch({ type: 'FETCH_USERS', payload: items }))
        .catch((type) => dispatch({ type }))

      setText('')
    }
  }

  return (
    <div className='grid items-center md:grid-cols-2 gap-4 my-10'>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='w-full pr-40 input bg-gray-200 text-black input-bordered'
            value={text}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='absolute top-0 right-0 rounded-l-none btn w-36'
          >
            go
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button
            type='button'
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            CLEAR
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
