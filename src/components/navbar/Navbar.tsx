import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex py-4 px-3 gap-2 bg-yellow-300'>
        <Link to = {'/'}>
            <button className='px-2 py-1 text-md rounded-md hover:bg-red-700'>
                Home
            </button>
        </Link>
        <Link to = {'/about'}>
            <button className='px-2 py-1 text-md rounded-md hover:bg-red-700 '>
                About
            </button>
        </Link>
    </div>
  )
}
