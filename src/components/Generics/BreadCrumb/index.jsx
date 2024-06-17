import React from 'react'
import { useLocation } from 'react-router-dom'
import Subtitle from '../Subtitle'
import Title from '../Title'
import { Arrow, Container } from './style'

export const BreadCrumb = (prop) => {
  const location = useLocation();

  return location.pathname !== '/analitika' ? (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
      <div style={{ display: 'flex', marginLeft: 'auto', gap: '16px' }}>{prop?.children}</div>
    </Container>
  ) : null;
}
