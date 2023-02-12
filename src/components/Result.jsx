import React, { useEffect, useState } from 'react'
import Profile from '../assets/grogu.png'
import Rebelde from '../assets/rebelde.png'
import Imperio from '../assets/imperio.png'
const Result = ({ firstFetch, secondFetch, thirdFetch, fourthFetch, fiveFetch }) => {
  const [color, setColor] = useState('Green')
  const [result, setResult] = useState('')
  useEffect(() => {
    const results = [firstFetch, secondFetch, thirdFetch, fourthFetch, fiveFetch]
    console.log(results)
    let rebelde = 0
    let imperio = 0
    for (const i in results) {
      console.log(results[i])
      if (results[i] === 'rebelde') {
        rebelde = rebelde + 1
        console.log(`el numero ${i} fue rebelde hay ${rebelde}`)
      } else {
        imperio = imperio + 1
        console.log(`el numero ${i} fue imperio hay ${imperio}`)
      }
    }
    console.log(`rebelde ${rebelde} imperio ${imperio}`)
    if (rebelde < imperio) {
      setResult('Imperio')
      setColor('Red')
    } else {
      setResult('Rebelde')
      setColor('Blue')
    }
  }, [])
  return (
    <div className='cd-container'>
      <p>{result}</p>
      <Card color={color} result={result} />
      <section className='cd-colors'>
        <button onClick={() => setColor('Green')} className='cd-button cd-buttonGreen' />
        <button onClick={() => setColor('Blue')} className='cd-button cd-buttonBlue' />
        <button onClick={() => setColor('Red')} className='cd-button cd-buttonRed' />
        <button onClick={() => setColor('White')} className='cd-button  cd-buttonWhite' />
      </section>
    </div>
  )
}

const Card = ({ color, result }) => {
  return (
    <div className={`cd-cardMain cd-cardMain${color}`}>
      <div className={`cd-card cd-card${color}`}>
        <section className='cd-profile'>
          <img src={Profile} alt='profile' className='cd-profileImage' />
          <p>Chopper</p>
        </section>
        <section className='cd-info'>
          <p className='cd-infoTitle'>{result === 'Imperio' ? 'Galáctico' : 'Alianza'}</p>
          <p className='cd-infoSubtitle'>{result}</p>
          <p className='cd-infoExtra'>OFICIALMENTE ERES PARTE</p>
        </section>
      </div>
      <img src={result === 'Imperio' ? Imperio : Rebelde} alt='rebelde' className='cd-rebelde' />
    </div>
  )
}
export default Result
