import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function ReposItem({
  name,
  full_name,
  description,
  watchers_count,
  stargazers_count,
  open_issues,
  forks,
}) {
  return (
    <div className='card shadow rounded-lg bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='card-title'>
          <a
            href={`https://github.com/${full_name}`}
            target='_blank'
            rel='noreferrer'
          >
            <FaLink className='inline mr-2' />
            {name}
          </a>
        </h3>
        {description && <p>{description}</p>}
        <div className='mt-3'>
          <div className='mr-4 badge badge-info text-lg'>
            <FaEye className='mr-2' />
            {watchers_count}
          </div>
          <div className='mr-4 badge badge-success text-lg'>
            <FaStar className='mr-2' />
            {stargazers_count}
          </div>
          <div className='mr-4 badge badge-error text-lg'>
            <FaInfo className='mr-2' />
            {open_issues}
          </div>
          <div className='mr-4 badge badge-warning text-lg'>
            <FaUtensils className='mr-2' />
            {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReposItem
