import React, { useState } from 'react'

function SimpleCuestion ({ setAnswer, number, question1, question2 }) {
  const [status, setStatus] = useState(false)
  const [response, setResponse] = useState('')
  const [out, setOut] = useState(false)
  const handleSend = () => {
    if (status) {
      setOut(true)
      setTimeout(() => { setAnswer(response, number) }, 1000)
    }
  }

  const handleInput = (e) => {
    setResponse(e.target.value)
    if (e.target.value.length === '') {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }
  return (
    <div className='fq-mainContainer'>
      <main className='fq-containerCuestion'>
        <span className='fq-cuestionOne'>{question1}</span>
        <span className='fq-cuestionTwo'>{question2}</span>
      </main>
      <input placeholder='Yo haria....' className={`${out ? 'fq-inputOut' : 'fq-input'}`} value={response} onChange={handleInput} />
      <button
        className={`${status ? 'fqa' : 'fq-continue'}  `}
        onClick={handleSend}
      >CONTINUAR
      </button>
    </div>
  )
}

export default SimpleCuestion
