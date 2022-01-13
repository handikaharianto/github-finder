import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useGithub } from '../context/github/GithubContext'
import Spinner from '../components/layout/Spinner'
import ReposList from '../components/repos/ReposList'
import { getUsersAndRepos } from '../context/github/GithubActions'

function User() {
  const { user, repos, isLoading, isError, dispatch } = useGithub()
  const { login: username } = useParams()

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' })

    const getUserData = async () => {
      try {
        const userData = await getUsersAndRepos(username)
        dispatch({ type: 'FETCH_USER_AND_REPOS', payload: userData })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }

    getUserData()
  }, [dispatch, username])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    // redirect to /notfound
    return <Navigate to='/notfound' replace />
  }

  return (
    <div className='w-full lg:w-10/12 mx-auto'>
      <div className='mt-10 mb-5'>
        <Link to='/' className='btn btn-ghost'>
          back to search
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={avatar_url} alt={login} />
            </figure>
            <div className='card-body justify-end'>
              <h2 className='card-title mb-0'>{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>

        <div className='sm:col-span-2'>
          <h2 className='card-title text-3xl'>
            {name}
            <div className='badge badge-success mx-2'>{type}</div>
            {hireable && <div className='badge badge-info mx-2'>Hireable</div>}
          </h2>
          <p>{bio}</p>
          <div className='mt-5 card-actions'>
            <a
              className='btn btn-outline'
              href={html_url}
              target='_blank'
              rel='noreferrer'
            >
              visit github profile
            </a>
          </div>

          <div className='w-full shadow stats mt-4'>
            {location && (
              <div className='stat'>
                <div className='stat-title'>Location</div>
                <div className='stat-value text-lg'>{location}</div>
              </div>
            )}

            {blog && (
              <div className='stat'>
                <div className='stat-title'>Website</div>
                <div className='stat-value text-lg'>
                  <a href={blog} target='_blank' rel='noreferrer'>
                    {blog}
                  </a>
                </div>
              </div>
            )}

            {twitter_username && (
              <div className='stat'>
                <div className='stat-title'>Twitter</div>
                <div className='stat-value text-lg'>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='w-full shadow-lg stats my-12 py-5'>
        <div className='stat'>
          <div className='stat-figure text-secondary text-3xl md:text-5xl ml-5 lg:m-0'>
            <FaUsers />
          </div>
          <div className='stat-title'>Followers</div>
          <div className='stat-value text-3xl sm:text-4xl'>{followers}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary text-3xl md:text-5xl ml-5 lg:m-0'>
            <FaUserFriends />
          </div>
          <div className='stat-title'>Following</div>
          <div className='stat-value text-3xl sm:text-4xl'>{following}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary text-3xl md:text-5xl ml-5 lg:m-0'>
            <FaCodepen />
          </div>
          <div className='stat-title'>Public Repos</div>
          <div className='stat-value text-3xl sm:text-4xl'>{public_repos}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary text-3xl md:text-5xl ml-5 lg:m-0'>
            <FaStore />
          </div>
          <div className='stat-title'>Public Gists</div>
          <div className='stat-value text-3xl sm:text-4xl'>{public_gists}</div>
        </div>
      </div>

      <ReposList repos={repos} />
    </div>
  )
}

export default User
