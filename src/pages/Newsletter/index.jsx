import React from 'react'
import "./Newsletter.css"

const Newsletter = ({email, placeholder}) => {
  return (
    <section className='hero-section'>
      <p>Sua casa com as</p>
      <h1>melhores plantas</h1>
      <p className='p2'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
      </p>
      <input type="email" id='email' placeholder={placeholder} required={true}/>{email}
      <button className='btn-newsletter' type='submit'>Assinar Newsletter</button>
    </section>
    
  )
}

export default Newsletter