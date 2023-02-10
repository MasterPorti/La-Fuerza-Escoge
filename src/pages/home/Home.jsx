import React, { useState } from 'react'

import ContainTitle from '../../components/ContainTitle'
import Intros from '../../components/Intros'

function Home (props) {
  const [animation, setAnimation] = useState(false)
  const [title, setTitle] = useState('DESCUBRE')
  const [subtitle, setSubtitle] = useState('CUAL BANDO ERES DE')

  const handleClick = () => {
    console.log('click')
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      setTitle('Preguntas')
      setSubtitle('Cual seria tu respuesta')
    }, 500)
  }

  return (
    <div className='hm-container'>
      <ContainTitle
        title={title}
        subtitle={subtitle}
        animation={animation}
      />
      <Intros handleClick={handleClick} animation={animation} />
    </div>
  )
}

export default Home
