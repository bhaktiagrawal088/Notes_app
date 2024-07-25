import React from 'react'
import logo from '../../assets/NLOGO.png'


function Navbar() {
  return (
    <header className='flex items-center px-6 py-3  shadow-lg  border-b-2 border-cyan-500 
    bg-blend-multiply bg-cyan-200 bg-gradient-to-r from-rose-50 via-white to-rose-50'>
      <div className='w-14 h-14 flex-shrink-0'>
        <img className='w-full h-full object-cover' src={logo} alt='logo'/>
      </div>
      <h1 className='text-5xl text-indigo-800 font-bold flex-grow'>OTE IT</h1>
    </header>
  )
}

export default Navbar
