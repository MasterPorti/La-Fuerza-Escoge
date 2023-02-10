import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layaout.scss'
import Logo from '../assets/Logo.svg'
const Layaout = () => {
  return (
    <div className='main-container'>
      <div className='ly-container'>
        <img src={Logo} alt='Logo' className='ly-logo' />
        <main className='ly-menuContainer'>
          <p className='ly-menuItem'>Inicio</p>
          <p className='ly-menuItem'>Conoce mas</p>
          <p className='ly-menuItem'>Inteligencia Artificial</p>
          <p className='ly-menuItem-white'>Cohere</p>
          <p className='ly-menuItem-white'>Github</p>
        </main>
      </div>
      <Outlet />
    </div>
  )
}

export default Layaout
