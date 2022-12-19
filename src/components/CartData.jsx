import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ADD_CART, REMOVE } from '../redux/action/action'
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DELETE } from '../redux/action/action'
import { DirtyLensTwoTone } from '@mui/icons-material'
const CartData = () => {
        const dispatch=useDispatch();
        const history=useNavigate();
    const [data, setData] = useState([])
    // console.log(data);
    // for particular id getting
    const { id } = useParams()
    console.log(id);

    //  for item detail getting
    const getdata = useSelector((state) => state.cartreducer.carts)
    console.log(getdata)

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        })
        setData(comparedata);
    }
    useEffect(() => {
        compare();
    }, [id]);
    //add data
    const send = (e) => {
        // console.log(e);
        dispatch(ADD_CART(e))
      }

    const del=(id)=>{
        dispatch(DELETE(id))
        history('/')
    }
    //remove one 
    const remove=(item)=>{
        // console.log(REMOVE(item))
        dispatch(REMOVE(item))
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mt-20'>Items Details Page</h1>
            <div className='flex w-[75%] h-[65vh] mx-auto mt-3 rounded-lg shadow-lg'>

                {
                    data.map((ele) => {
                        return (
                            <>
                                <img src={ele.img} className='w-[78%] h-[220px] relative top-20  rounded-lg ' alt="" />
                                <div className='w-full  pl-3 '>
                                    
                                    <div className='mb-8 mt-3'>
                                        <p><strong className='font-bold px-1'>Restaurent</strong>: {ele.rname}</p>
                                        <p className=''>Theory</p>
                                    </div>

                                    <p className='mb-8'><strong className='font-bold px-1'>Price</strong>:{ele.price}.00/-</p>

                                    <div className='mb-5'>
                                        <p><strong className=' px-1'>Dishes</strong>: Northen India ,Biryani,Mughali</p>
                                        <p className='mt-5'><strong >Total</strong>: Rs<strong> {ele.price*ele.qty}.00</strong>/-</p>
                                    </div>

                                    <div className='mt-10 pl-2 items-center text-xl' >
                                        <button className='bg-red-600 p-2 rounded-lg  mr-2' onClick={ele.qty<=1 ? ()=>del(ele.id):()=>remove(ele)}><AiOutlineMinus /></button>
                                        {ele.qty}
                                        <button className='bg-green-600 p-2 rounded-lg  ml-2' onClick={()=>send(ele)}><AiOutlinePlus /></button>
                                    </div>

                                </div>

                                <div className='w-full relative pl-3'>
                                    <div className='flex px-1 mb-5'>
                                        <strong className='px-1'>Rating</strong>:<strong className='bg-green-800 items-center flex rounded-lg gap-1 px-1 text-white'>  {ele.rating} <AiTwotoneStar size={13} /></strong>
                                    </div>
                                    <div className='text-red-700 text-2xl bottom-0 flex' onClick={()=>del(ele.id)}><strong className='text-black font-bold text-xl'>Remove :</strong><MdDelete />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CartData