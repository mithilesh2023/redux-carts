import React from 'react'
import data from '../data'
const MyAppCart = ({data}) => {
  return (
    <>
      <div className='w-[24%] shadow-lg rounded-lg '>
        <img src={data.img}
          className='w-full h-[240px] rounded-md' alt="dog" />
        <div className='pl-2'>
          <p className='text-2xl'>{data.title}</p>
          <p className='text-2xl'>Price: <span className='font-semibold text-red-600'> ₹{data.price}.00/-</span></p>
        </div>
        <div className='p-2'>
          <button className='bg-green-600 w-full px-3 py-2 text-red-900 text-2xl'>Add to Cart</button>
        </div>
      </div>
    </>
  )
}
const MyCarts = () => {
  return (
    <>
      <p className='text-4xl text-center'>Add To Cart Project</p>
      <div className='flex flex-wrap gap-3 py-3 pl-3'>
        {
          data.map((data,index)=>{
            return(
              <MyAppCart data={data} key={index}/>
            )
          })
        }
      </div>
    </>
  )
}

export default MyCarts