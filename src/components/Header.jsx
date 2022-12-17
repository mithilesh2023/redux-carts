import React, { useState } from 'react'
import { BsCart } from 'react-icons/bs'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className=' flex justify-between bg-teal-400 text-2xl fixed top-0 left-0 right-0  p-3'>
        <div className='flex gap-3'>
          <Link to='/'> AddToCart</Link>
        </div>
        <div className='flex'>
          <input type="search" placeholder='Search...' className='p-1 rounded-l-lg' />
          <button className='rounded-r-lg bg-red-600 py-1 px-2 text-white '>Go</button>
        </div>
        <Badge badgeContent={getdata.length} color="secondary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ShoppingCartIcon />
        </Badge>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {
          getdata.length ?
            <div className='p-10'>
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Photo</th>

                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Restaurant Name</th>
                    
                     <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Qty</th>

                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>

                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((e) => {
                      return (
                        <>
                          <tr>
                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                              <img src={e.img} className='w-[70px] h-[70px]' alt='' />
                            </td>
                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{e.title}</td>
                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{e.Qty}</td>
                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">₹{e.price}.00/-</td>
                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                              <DeleteIcon className=" text-red-500"/>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div> : <div className='flex'>
              <CloseIcon onClick={handleClose} style={{ position: "absolute", top: 0, right: 0, fontSize: 35 }} />
              <p className='text-[30px] p-3'>Your cart is empty</p>
              <RemoveShoppingCartIcon style={{ fontSize: 80, position: "absolute", right: 25 }} />
            </div>
        }

      </Menu>
    </>

  )
}

export default Header