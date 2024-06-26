import React from 'react'
import { useLocation } from 'react-router-dom'
import { BreadCrumb } from '../BreadCrumb'
import { Container } from './style'

const Generics = () => {

  const location = useLocation()


  return (
    <Container>
      <BreadCrumb />
      <h2>{location.pathname}-page</h2>
      <h2>Coming soon...</h2>
    </Container>
  )
}



export { Generics }
