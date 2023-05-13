import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';

export const MainLayout = () => {
  return (
      <div className='flex flex-col min-h-screen w-full bg-slate-200'>
        <Navbar />
        <div className="px-4">
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout;