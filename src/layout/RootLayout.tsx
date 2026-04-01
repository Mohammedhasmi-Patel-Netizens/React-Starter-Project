import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div className='p-5 h-5 bg-black flex items-center'>
        <Link   to="/about" className='text-white mr-5'>About</Link>
        <Link to="/contact" className='text-white'>Contact</Link>
    </div>

    <Outlet />
</>
  )
}

export default RootLayout