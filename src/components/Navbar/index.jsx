
import React from 'react'
import GenericSelect from './Select'
import { Container, Input, InputWrapper, SearchIcon, Section } from './style'
import Time from './Time'

export const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder='search' />
      </InputWrapper>
      <Section>
        <GenericSelect />
        <Time />
      </Section>
    </Container>
  )
}


export default Navbar