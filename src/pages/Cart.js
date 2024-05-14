import React, { useEffect, useState } from 'react'
import CardItem from '../components/CardItem'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

function Cart() {

    const {cart} = useSelector( (state)=> state );
    const [amount,setamount] = useState(0);

    useEffect( ()=> {
        setamount(cart.reduce( (acc,curr)=> acc + curr.price,0 ));
    },[cart] );
    
  return (
    <div>

        <div className='flex max-w-6xl mx-auto gap-x-20'>
        
                {
                    cart.length === 0 ? (
                        <div className='mt-40 mx-auto '>
                            <p className='text-xl font-semibold mt-6 ml-2'>Your Cart is empty!</p>
                            <NavLink to={"/"}><button className='bg-green-600 text-white w-48 h-12 mt-5 rounded-md border-green-900
                            text-xl font-bold tracking-wide'>SHOP NOW</button></NavLink>
                        </div>
                    ) : (
                        <div className='flex mt-16 gap-x-24'>
                            <div>
                                { cart.map( (item)=> ( <CardItem key={item.id} item={item}  /> ) ) }
                                
                            </div>

                            <div className='flex flex-col gap-y-20'>
                                <div>
                                    <p className='text-xl font-bold text-slate-500'>YOUR CART</p>
                                    <p className='text-5xl text-green-700 font-bold'>SUMMARY</p>
                                    <p className='text-lg font-bold mt-6'>Total Items: {cart.length}</p>
                                </div>

                                <div>
                                    <p className='text-lg font-bold'>Total Amount: <span>${amount}</span></p>
                                    <button className='bg-green-700 text-white w-96 h-12 mt-5 rounded-md border-green-900
                                    text-xl font-bold tracking-wide'>Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
        </div>
        

    </div>
  )
}

export default Cart