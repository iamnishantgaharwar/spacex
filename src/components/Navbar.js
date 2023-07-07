import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className='flex justify-between h-20 items-center font-customMont font-bold  text-white bg-black  '>
        <Link to={"/"}><div className='text-4xl italic ml-12 pl-20 overflow-hidden'>RocketVerse</div></Link>
        <Link to={"/about"}>
          <button className='mr-20 ease-in duration-300 hover:bg-slate-200 hover:text-black p-3 rounded-lg'>About</button>
          </Link>
    </nav>
    </>
  )
}

export default Navbar