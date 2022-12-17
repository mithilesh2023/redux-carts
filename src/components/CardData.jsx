import React from 'react'
import { AiOutlineMinus, AiOutlinePlus,AiTwotoneStar } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
const CardData = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Items Details Page</h1>
            <div className='flex w-[75%] h-[65vh] mx-auto mt-3 rounded-lg shadow-lg'>
                <img src="http://images6.fanpop.com/image/photos/35600000/Puppy-dogs-35608642-2048-1365.jpg" className='w-[78%] h-[220px] relative top-20  rounded-lg ' alt="" />
                <div className='w-full  pl-3 '>
                    <div className='mb-8 mt-3'>
                        <p><strong className='font-bold px-1'>Restaurent</strong>: Masala</p>
                        <p className=''>Theory</p>
                    </div>

                    <p className='mb-8'><strong className='font-bold px-1'>Price</strong>: 350.00/-</p>

                    <div className='mb-5'>
                        <p><strong className=' px-1'>Dishes</strong>: Northen India ,Biryani,Mughali</p>
                        <p className='mt-5'><strong >Total</strong>: Rs<strong>350.00</strong>/-</p>
                    </div>
                    <div className='mt-10 pl-2 items-center text-xl' >
                        <button className='bg-red-600 p-2 rounded-lg  mr-2'><AiOutlineMinus /></button>
                        {2}
                        <button className='bg-green-600 p-2 rounded-lg  ml-2'><AiOutlinePlus /></button>
                    </div>
                </div>

                <div className='w-full relative pl-3'>
                    <div className='flex px-1 mb-5'>
                        <strong className='px-1'>Rating</strong>:<strong className='bg-green-800 items-center flex rounded-lg gap-1 px-1 text-white'> 3.8 <AiTwotoneStar size={13}/></strong>
                    </div>
                    <div className='text-red-700 text-2xl bottom-0 flex'><strong className='text-black font-bold text-xl'>Remove :</strong><MdDelete/></div>
                </div>
            </div>
        </div>
    )
}

export default CardData