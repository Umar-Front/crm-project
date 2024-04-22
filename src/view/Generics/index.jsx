import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './style'

const Generics = () => {

  const location = useLocation()


  return (
    <Container>
      <h2>{location.pathname}</h2>
      <h2>Coming soon...</h2>
    </Container>
  )
}



export { Generics }
