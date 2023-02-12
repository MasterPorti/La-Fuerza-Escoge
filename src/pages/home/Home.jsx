import React, { useEffect, useState } from 'react'

import ContainTitle from '../../components/ContainTitle'
import FirtsCuestion from '../../components/FirtsCuestion'
import Intros from '../../components/Intros'
import Result from '../../components/Result'
import SimpleCuestion from '../../components/SimpleCuestion'

import { exampleFirst, exampleSecond, exampleThird, exampleFour, exampleFive } from '../../dataExamples/examples'

function Home (props) {
  const [animation, setAnimation] = useState(false)
  const [title, setTitle] = useState('DESCUBRE')
  const [intro, setIntro] = useState(true)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const [five, setFive] = useState(false)
  const [subtitle, setSubtitle] = useState('CUAL BANDO ERES DE')
  const [firstResponse, setFirstResponse] = useState('')
  const [firstFetch, setFirstFetch] = useState('')
  const [secondResponse, setSecondResponse] = useState('')
  const [secondFetch, setSecondFetch] = useState('')
  const [thirdResponse, setThirdResponse] = useState('')
  const [thirdFetch, setThirdFetch] = useState('')
  const [fourthResponse, setFourthResponse] = useState('')
  const [fourthFetch, setFourthFetch] = useState('')
  const [fiveResponse, setFiveResponse] = useState('')
  const [fiveFetch, setFiveFetch] = useState('')
  const [result, setResult] = useState(false)

  // Fetch fist question

  useEffect(() => {
    if (firstResponse) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer qmsZwGeBtNpgH2AcOIuc8EJWvZ5F0upibyIOgQfR'
        },
        body: JSON.stringify({
          inputs: [firstResponse],
          examples: exampleFirst,
          truncate: 'END'
        })
      }
      fetch('https://api.cohere.ai/classify', options)
        .then(response => response.json())
        .then(response => {
          console.log(response.classifications[0].prediction)
          setFirstFetch(response.classifications[0].prediction)
        })
        .catch(err => console.error(err))
    }
  }, [firstResponse])

  // Fetch second question

  useEffect(() => {
    if (secondResponse) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer qmsZwGeBtNpgH2AcOIuc8EJWvZ5F0upibyIOgQfR'
        },
        body: JSON.stringify({
          inputs: [secondResponse],
          examples: exampleSecond,
          truncate: 'END'
        })
      }
      fetch('https://api.cohere.ai/classify', options)
        .then(response => response.json())
        .then(response => {
          setSecondFetch(response.classifications[0].prediction)
        })
        .catch(err => console.error(err))
    }
  }, [secondResponse])

  // Fetch third question
  useEffect(() => {
    if (thirdResponse) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer qmsZwGeBtNpgH2AcOIuc8EJWvZ5F0upibyIOgQfR'
        },
        body: JSON.stringify({
          inputs: [thirdResponse],
          examples: exampleThird,
          truncate: 'END'
        })
      }
      fetch('https://api.cohere.ai/classify', options)
        .then(response => response.json())
        .then(response => {
          setThirdFetch(response.classifications[0].prediction)
        })
        .catch(err => console.error(err))
    }
  }, [thirdResponse])

  // Fetch fourth question
  //! Change this examples
  useEffect(() => {
    if (fourthResponse) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer qmsZwGeBtNpgH2AcOIuc8EJWvZ5F0upibyIOgQfR'
        },
        body: JSON.stringify({
          inputs: [fourthResponse],
          examples: exampleFour, //! Change this
          truncate: 'END'
        })
      }
      fetch('https://api.cohere.ai/classify', options)
        .then(response => response.json())
        .then(response => {
          setFourthFetch(response.classifications[0].prediction)
        })
        .catch(err => console.error(err))
    }
  }, [fourthResponse])

  // Fetch five question

  useEffect(() => {
    if (fiveResponse) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer qmsZwGeBtNpgH2AcOIuc8EJWvZ5F0upibyIOgQfR'
        },
        body: JSON.stringify({
          inputs: [fiveResponse],
          examples: exampleFive,
          truncate: 'END'
        })
      }
      fetch('https://api.cohere.ai/classify', options)
        .then(response => response.json())
        .then(response => {
          setFiveFetch(response.classifications[0].prediction)
        })
        .catch(err => console.error(err))
    }
  }, [fiveResponse])

  const handleClick = () => {
    console.log('click')
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      setTitle('Preguntas')
      setSubtitle('Cual seria tu respuesta')
      setIntro(false)
      setFirst(true)
    }, 500)
  }

  const hideFirst = (value) => {
    setFirst(value)
    setSecond(true)
  }

  const setAnswer = (value, number) => {
    console.log(value, number)
    switch (number) {
      case 2:
        setSecondResponse(value)
        setSecond(false)
        setThird(true)
        break
      case 3:
        setThirdResponse(value)
        setThird(false)
        setFourth(true)
        break
      case 4:
        setFourthResponse(value)
        setFourth(false)
        setFive(true)
        break
      case 5:
        setFiveResponse(value)
        setFive(false)
        setResult(true)
        break
    }
  }

  return (
    <div className='hm-container'>
      <ContainTitle
        title={title}
        subtitle={subtitle}
        animation={animation}
      />
      {intro && <Intros handleClick={handleClick} animation={animation} />}
      {first && <FirtsCuestion hideFirst={hideFirst} answer={setFirstResponse} />}
      {second && <SimpleCuestion setAnswer={setAnswer} number={2} question1='¿Como esta actualmente' question2='tu habitacion?' />}
      {third && <SimpleCuestion setAnswer={setAnswer} number={3} question1='¿Si vez una injustica que ' question2='que haces?' />}
      {fourth && <SimpleCuestion setAnswer={setAnswer} number={4} question1='Describe tu equipo ' question2='perfecto' />}
      {five && <SimpleCuestion setAnswer={setAnswer} number={5} question1='¿Que te gusta hacer en tu' question2='tiempo libre?' />}
      {result && <Result
        firstFetch={firstFetch}
        secondFetch={secondFetch}
        thirdFetch={thirdFetch}
        fourthFetch={fourthFetch} fiveFetch={fiveFetch}
                 />}
    </div>
  )
}

export default Home
