import React from 'react'

function ContainTitle ({ title, subtitle, animation }) {
  return (
    <div className='hm-titleContainer'>
      <h1 className={animation ? 'hm-titleOut' : 'hm-title'}>{title}</h1>
      <p className={animation ? 'hm-subtitleOut' : 'hm-subtitle'}>{subtitle}</p>
    </div>
  )
}

export default ContainTitle
