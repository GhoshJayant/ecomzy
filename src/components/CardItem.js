import React from 'react'
import { useDispatch } from 'react-redux'
import {remove} from '../redux/slices/CartSlice'
import {AiFillDelete} from "react-icons/ai"
import { toast } from 'react-hot-toast'


function CardItem({item}) {

  const dispatch = useDispatch();

  function removeItemFromCart(){
    console.log("hn aaye h")
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (
    <div >

      <div className='flex max-w-xl justify-between'>
        
        <div className='w-1/4'>  
          <img src={item.image} className=' w-full' />
        </div>

        <div className='w-2/3'>
          <p className="text-gray-700 font-semibold text-xl text-left  ">{item.title}</p>
          <p className='text-base mt-6'>{item.description.split(" ").slice(0,14).join(" ")+"..."}</p>
          <div className='flex justify-between items-center mt-5'>
            <p className="text-green-600 text-lg font-bold">${item.price}</p>
            <div onClick={removeItemFromCart} className='relative bg-red-200 hover:bg-red-400 w-10 h-10 rounded-full' >
              <AiFillDelete className=' absolute top-2.5 w-10 h-5 text-slate-600 cursor-pointer '/>
            </div>
          </div>

        </div>
        
      </div>

      <div className='w-full h-px bg-slate-600 my-8'></div>

    </div>
  )
}

export default CardItem