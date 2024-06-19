import React from 'react'
import Input from '../Generics/Input'
import { Container, Section, SearchIcon } from './style'
import Time from './Time'
import DatePicker from "./DateTimePicker"
import GenericSelect from '../Generics/Select'

export const Navbar = () => {
  const data = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' },
  ]
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
        <GenericSelect label={'Language'} data={data} />
      </Section>
    </Container>
  )
}


export default Navbar