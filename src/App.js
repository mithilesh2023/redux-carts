import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardData from './components/CardData'
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
          <Route path='/carddata' element={<CardData/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
