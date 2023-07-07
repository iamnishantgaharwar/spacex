import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex justify-between h-20 items-center font-customMont font-bold  text-white bg-black  '>
        <div className='text-4xl italic ml-12 pl-20 overflow-hidden'>RocketVerse</div>
        <div className='mr-20'>About</div>
    </nav>
    </>
  )
}

export default Navbar