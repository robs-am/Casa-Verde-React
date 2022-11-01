import React from 'react'
import "./Newsletter.css"

const Newsletter = ({email, placeholder}) => {
  return (
    <section className='hero-section'>
      <p>sua casa com as</p>
      <h1>melhores plantas</h1>
      <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
      </p>
      <input type="email" placeholder={placeholder}>{email}</input>
    </section>
    
  )
}

export default Newsletter