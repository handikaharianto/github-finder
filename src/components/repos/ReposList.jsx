import PropTypes from 'prop-types'
import ReposItem from './ReposItem'

function ReposList({ repos }) {
  return (
    <div className='card rounded-lg shadow-lg'>
      <div className='card-body'>
        <h3 className='card-title text-3xl font-bold'>Latest Repositories</h3>

        <div className='grid gap-2'>
          {repos.map((repo) => (
            <ReposItem key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  )
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default ReposList
