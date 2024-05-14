import React from 'react'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {add,remove} from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast';

function Template({post}) {

    const dispatch = useDispatch();
    const {cart} = useSelector( (state) => state);

    function addItem(){
        dispatch( add(post));
        toast.success("Item Added to Cart");
    }

    function removeItem(){
        dispatch( remove(post.id));
        toast.error("Item Removed From Cart");
    }

  return (
    <div className="mt-10 flex flex-col items-center group justify-between shadow-xl outline outline-slate-200 outline-1 
    hover:scale-110 transition duration-500 ease-in-out gap-3 p-4  ml-5 rounded-xl hover:shadow-2xl " >
    
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        <div className='h-[180px]'> <img src={post.image}  className='w-full h-full' /></div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${post.price}</p>

            {
                cart.some( (it)=>(it.id === post.id) ) ? (
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    group-hover:bg-gray-700
                    group-hover:text-white transition duration-300 ease-in" onClick={removeItem}>REMOVE ITEM</button>
                ) : (
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    group-hover:bg-gray-700
                    group-hover:text-white transition duration-150 ease-in" onClick={addItem}>ADD TO CART</button>
                )
            }
            
        </div>

    </div>
  )
}

export default Template