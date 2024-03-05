import { Link, Outlet } from 'react-router-dom'
import Logo from '../../public/logo-light.webp'
import { IconSearch, IconWrite } from '../assets/Icons'
import { useState } from 'react'
export const Navbar = () => {
  const [inputSearchVisible, setInputSearchVisible] = useState(false)

  const handleInputSearch = () => {
    setInputSearchVisible(!inputSearchVisible)
  }

  return (
    <>
      <nav className="navbar">
        <Link to={'/'} className='flex-none h-[44px]'>
          <img src={Logo} alt="Logo Tu medio" className='h-full' />
        </Link>
        <div className={`absolute border-b border-grey p-4 px-[5vw] w-full mt-0.5 left-0 top-full md:border-0 md:block md:relative md:inset-0 md:p-0 md:show ${inputSearchVisible ? 'show' : 'hide'}`}>
          <input className='bg-gray-200 p-3 rounded-full font-Lato w-full text-sm px-6 md:w-auto md:pl-10 focus-visible:outline-slate-300 focus-visible:outline-1 placeholder:font-Lato placeholder:text-gray-500 text-gray-950' type="text" placeholder='Buscar' />
          <IconSearch cssInfo='absolute right-[10%] top-[26px] p-1 pointer-events-none md:left-3 md:top-[10px]' />
        </div>
        <div className='ml-auto flex justify-center items-center gap-4 h-full'>
          <IconSearch onHandle={handleInputSearch} cssInfo='bg-gray-200 h-full w-10 p-2 rounded-full cursor-pointer md:hidden' />
          <Link to={'/editor'} className='hidden md:flex gap-2 items-center rounded-lg h-full px-4 hover:bg-gray-200'>
            <IconWrite cssInfo='fill-[#7d7d7d] w-6 h-6' />
            <p className='font-Lato'>Escribe</p>
          </Link>
          <Link to={'signin'} className='bg-gray-800 text-gray-200 rounded-full w-24 flex items-center justify-center font-Lato h-full'>Sign In</Link>
          <Link to={'signup'} className='hidden bg-gray-200 text-gray-800 rounded-full w-24 md:flex items-center justify-center font-Lato h-full'>Sign Up</Link>
        </div>
      </nav>
      <Outlet />
    </>

  )
}
