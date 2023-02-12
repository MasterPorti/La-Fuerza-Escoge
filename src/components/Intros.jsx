import React from 'react'
import laser from '../assets/laser.png'
function Intros ({ handleClick, animation }) {
  return (
    <>
      <section className='hm-contentContainer'>
        <div className={animation ? 'hm-firstCuesntionContainerOut' : 'hm-firstCuesntionContainer'}>
          <p>¿Estas <span>List@?</span></p>
        </div>
        <div className={animation ? 'hm-startButtonContainerOut' : 'hm-startButtonContainer'}>
          <button className='hm-startButton' onClick={handleClick}>
            <p>
              Comenzar
            </p>
            <div className='hm-plasma' />
            <img src={laser} alt='laser' className='hm-laser' />
            <p className='textrds'>
              Comenzar
            </p>
          </button>
        </div>
      </section>
      <p className={animation ? 'hm-extraInfoOut' : 'hm-extraInfo'}>Con inteligencia artifical
        detectaremos si eres <span className='rebelde'>Rebelde </span>o Del <span className='imperio'>Imperio</span>
      </p>
    </>
  )
}

export default Intros
