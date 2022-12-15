import React from 'react'
import {BsCart} from 'react-icons/bs'
const Header = () => {
  return (
    <>
    <div className=' flex justify-between bg-teal-400 text-2xl  p-3'>
        <div className='flex gap-3'>
           <p> AddToCart</p>
            <p>Home</p>
        </div>
        <div className='flex'>
            <input type="search" placeholder='Search...' />
            <button>Go</button>
        </div>
        <div>
            <BsCart className='text-3xl'/>
        </div>
    </div>
    </>
    
  )
}

export default Header