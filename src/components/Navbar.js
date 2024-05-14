import React from 'react'
import {IoMdCart} from 'react-icons/io';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


function Navbar() {

  const {cart} = useSelector( (state) => state);
  return (
  
    
      <div className='bg-slate-900 '>
          
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
          <NavLink to={"/"}><img src='../logo.png' width={170}  /></NavLink>
          <div className='flex gap-x-6 items-center'>
            <NavLink to={"/"}><p className='text-white hover:text-green-500 text-lg'>Home</p></NavLink>
            <NavLink to={"/cart"}><div className='relative '>
            <IoMdCart className='text-white hover:text-green-500 text-3xl' />
            {
              cart.length > 0 && (<span className='text-white absolute bottom-4 left-3.5 bg-green-600 text-xs w-5 h-5 flex 
              justify-center items-center animate-bounce rounded-full'>{cart.length}
              </span>) 
            }

            </div></NavLink>
          </div>
        </nav>

      </div>
  
  )
}

export default Navbar