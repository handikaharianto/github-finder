import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='not-found'>
      <div className='text-center'>
        <h1 className='text-8xl font-bold'>Oops!</h1>
        <p className='text-5xl my-7'>404 - Page Not Found!</p>
        <Link to='/' className='btn btn-primary '>
          <FaHome className='mr-1' />
          BACK TO HOME
        </Link>
      </div>
    </section>
  )
}

export default NotFound
