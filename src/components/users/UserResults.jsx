import { useEffect } from 'react'
import { useGithub } from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const { users, isLoading, fetchUsers } = useGithub()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

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
