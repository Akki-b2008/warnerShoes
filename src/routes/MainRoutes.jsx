import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/home/Home'
import Auth from '../pages/AuthPage/Auth'
import Shop from '../pages/Shop/Shop'
import AboutUs from '../pages/AboutPage/AboutUs'
import Cart from '../pages/Cart/Cart'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Mainroutes
