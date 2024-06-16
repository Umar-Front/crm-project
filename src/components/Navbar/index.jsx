import React from 'react'
import Input from '../Generics/Input'
import GenericSelect from './Select'
import { Container, Section, SearchIcon } from './style'
import Time from './Time'
import DatePicker from "./DateTimePicker"

export const Navbar = () => {
  return (
    <Container>
      <Input
        width={500}
        height={40}
        iconLeft={<SearchIcon />}
        borderRadius={8} />
      <Section>
        <Time />
        <DatePicker />
        <GenericSelect />
      </Section>
    </Container>
  )
}


export default Navbar