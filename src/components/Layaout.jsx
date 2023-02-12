import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import './Layaout.scss'
import Logo from '../assets/Logo.svg'
import MobileButton from '../assets/sandwich.svg'
import CloseButton from '../assets/cross.svg'
const Layaout = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className='main-container'>
      <button className='ly-mobileButton' onClick={() => setHidden(!hidden)}><img src={MobileButton} /></button>
      <div className={`ly-container ${hidden ? 'ly-hidden' : ''} `}>
        <button className={hidden ? 'ly-closeButton' : 'ly-closeButtonHidden'} onClick={() => setHidden(!hidden)}><img src={CloseButton} /></button>
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
