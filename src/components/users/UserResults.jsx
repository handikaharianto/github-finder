import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const options = {
      method: 'GET',
      url: '/users',
    }

    axios
      .request(options)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => console.log(error))

    setIsLoading(false)
  }

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
