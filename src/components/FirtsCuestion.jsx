import React, { useState } from 'react'

function FirtsCuestion ({ hideFirst, answer }) {
  const [status, setStatus] = useState(false)
  const [meUno, setMeUno] = useState(false)
  const [veoLaPelea, setVeoLaPelea] = useState(false)
  const [other, setOther] = useState(false)
  const [otherAnimation, setOtherAnimation] = useState(false)
  const [response, setResponse] = useState('')
  const [out, setOut] = useState(false)
  const handleSend = () => {
    if (status) {
      answer(response)
      setOut(true)
      setTimeout(() => { hideFirst(false) }, 1000)
    }
  }
  const handleButton = (e) => {
    console.log(e.target.id)

    if (e.target.id === 'Me uno') {
      meUno ? setStatus(false) : setStatus(true)
      meUno ? setResponse('') : setResponse('Me uno')
      setMeUno(!meUno)
      veoLaPelea && setVeoLaPelea(!veoLaPelea)
    } else {
      veoLaPelea ? setStatus(false) : setStatus(true)
      veoLaPelea ? setResponse('') : setResponse('Veo La Pelea')
      setVeoLaPelea(!veoLaPelea)
      meUno && setMeUno(!meUno)
    }
  }
  const handleOther = () => {
    setResponse('')
    setStatus(false)
    setMeUno(false)
    setVeoLaPelea(false)
    setOtherAnimation(true)
    setTimeout(() => { setOther(true) }, 300)
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

      <h2 className='fq-cuestion'>Si ves una pelea entre el imperio y los rebeldes</h2>

      {!other &&
        <section className={`fq-options ${otherAnimation ? 'fq-animationOut' : ''}`}>
          <button
            className={`${meUno ? 'fqa' : 'fq-buttonSimple'}`}
            onClick={handleButton} id='Me uno'
          >Me uno
          </button>
          <button
            className={`${veoLaPelea ? 'fqa' : 'fq-buttonSimple'}`}
            onClick={handleButton} id='Veo La Pelea'
          >Veo La pelea
          </button>
          <button className='fq-buttonOther' onClick={handleOther}>Otro</button>
        </section>}
      {other && <input placeholder='Yo haria....' className={`${out ? 'fq-inputOut' : 'fq-input'}`} value={response} onChange={handleInput} />}
      <button
        className={`${status ? 'fqa' : 'fq-continue'}  `}
        onClick={handleSend}
      >CONTINUAR
      </button>
    </div>
  )
}

export default FirtsCuestion
