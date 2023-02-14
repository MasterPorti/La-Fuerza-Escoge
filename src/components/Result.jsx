import React, { useEffect, useState } from 'react'
import Profile from '../assets/grogu.png'
import Profile01 from '../assets/prifileDarth.webp'
import Profile02 from '../assets/profielStoorn.jpg'
import Profile03 from '../assets/profileAna.webp'
import Rebelde from '../assets/rebelde.png'
import Imperio from '../assets/imperio.png'
const Result = ({ firstFetch, secondFetch, thirdFetch, fourthFetch, fiveFetch }) => {
  const [color, setColor] = useState('Green')
  const [result, setResult] = useState('')
  const [name, setName] = useState('Magma')
  const [profile, setProfile] = useState(Profile)
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
      <Card color={color} result={result} name={name} profile={profile} />
      <section className='cd-colors'>
        <div className='cd-colorContainer'>
          <button onClick={() => setColor('Green')} className='cd-button cd-buttonGreen' />
          <button onClick={() => setColor('Blue')} className='cd-button cd-buttonBlue' />
          <button onClick={() => setColor('Red')} className='cd-button cd-buttonRed' />
          <button onClick={() => setColor('White')} className='cd-button  cd-buttonWhite' />
        </div>
        <div className='cd-picsProfile'>
          <button onClick={() => setProfile(Profile)}>
            <img src={Profile} alt='profilePic' className='cd-buttonProfile' />
          </button>
          <button onClick={() => setProfile(Profile01)}>
            <img src={Profile01} alt='profilePic' className='cd-buttonProfile' />
          </button>
          <button onClick={() => setProfile(Profile02)}>
            <img src={Profile02} alt='profilePic' className='cd-buttonProfile' />
          </button>
          <button onClick={() => setProfile(Profile03)}>
            <img src={Profile03} alt='profilePic' className='cd-buttonProfile' />
          </button>
        </div>
        <input placeholder='Magma' className='cd-input' value={name} onChange={(e) => setName(e.target.value)} />
      </section>
    </div>
  )
}

const Card = ({ color, result, name, profile }) => {
  return (
    <div className={`cd-cardMain cd-cardMain${color}`}>
      <div className={`cd-card cd-card${color}`}>
        <section className='cd-profile'>
          <img src={profile} alt='profile' className='cd-profileImage' />
          <p>{name}</p>
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
