import React, { useState } from 'react'

import ContainTitle from '../../components/ContainTitle'
import Intros from '../../components/Intros'

function Home (props) {
  const [animation, setAnimation] = useState(false)
  const [title, setTitle] = useState('DESCUBRE')
  const [intro, setIntro] = useState(true)
  const [subtitle, setSubtitle] = useState('CUAL BANDO ERES DE')

  const handleClick = () => {
    console.log('click')
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      setTitle('Preguntas')
      setSubtitle('Cual seria tu respuesta')
      setIntro(false)
    }, 500)
  }

  return (
    <div className='hm-container'>
      <ContainTitle
        title={title}
        subtitle={subtitle}
        animation={animation}
      />
      {intro && <Intros handleClick={handleClick} animation={animation} />}
      {!intro && <p>hola</p>}
    </div>
  )
}

export default Home
