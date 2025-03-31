import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
        <div className='text-2xl font-bold'>My App</div>
        <nav className='flex space-x-4'>
            <Link to="/" className='hover:text-gray-400'>Home</Link>
            <Link to="/profile" className='hover:text-gray-400'>Profile</Link>
        </nav>
    </div>
  )
}

export default Navbar