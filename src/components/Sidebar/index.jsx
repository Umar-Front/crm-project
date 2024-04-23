import React from 'react'
import { Outlet } from 'react-router-dom'
import { Body, Container, Side, Wrapper } from './style'
import Navbar from '../Navbar'

export const Sidebar = () => {
  return (
    <Container>
      <Side>
        <h2>sidebar</h2>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  )
}
