import { useGithub } from '../../context/github/GithubContext'
import Message from '../layout/Message'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const { users, isLoading, isError } = useGithub()

  if (!isLoading && !isError) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    )
  } else if (isError) {
    return <Message msg='Oops! Failed to fetch data!' />
  } else {
    return <Spinner />
  }
}

export default UserResults
