import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ title }) {
  return (
    <div className='navbar bg-neutral shadow-lg text-neutral-content'>
      <div className='container mx-auto py-1'>
        <div className='flex-none'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link className='text-xl font-bold align-middle' to='/'>
            {title}
          </Link>
        </div>
        <div className='flex-1'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm-rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm-rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
