import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartData from './components/CartData'
import Header from './components/Header'
import MyCarts from './components/MyCarts'
import Error from './components/Error'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<MyCarts/>}/>
          <Route path='/cart/:id' element={<CartData/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
