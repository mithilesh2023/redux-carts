import React from 'react'
import ProductData from '../data'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_CART } from '../redux/action/action'
const MyCarts = () => {
  const [data, setData] = useState(ProductData)
  // console.log(data);
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD_CART(e))
  }

  return (
    <>
      <p className='text-4xl text-center bg-slate-200 mt-16'>Add To Cart Project</p>
      <div className='flex flex-wrap gap-3 bg-slate-200 py-3 pl-3'>
        {
          ProductData.map((data, index) => {
            return (
              <div className='w-[24%] shadow-lg rounded-lg bg-white'  key={index}>
                <img src={data.img}
                  className='w-full h-[240px] p-3 rounded-md' alt="dog" />
                <div className='pl-3'>
                  <p className='text-2xl'>{data.title}</p>
                  <p className='text-2xl'>Price: <span className='font-semibold text-red-600'> ₹{data.price}.00/-</span></p>
                </div>
                <div className='p-3'>
                  <button onClick={() => send(data)} className='bg-green-600 w-full px-3 py-2 text-red-900 text-2xl'>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
const MyAppCart = ({ datas }) => {

  return (
    <>

    </>
  )
}

export default MyCarts