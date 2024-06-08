import React from 'react'
import { GenericTable } from '../../Generics/Table';
import { Container } from './style'

const AllLids = () => {

  const headCells = [

    { id: 'name', label: 'O"quvchining ismi' },
    { id: 'group', label: 'Guruh/Fan' },
    { id: 'date', label: 'Dars kuni va vaqt' },
    { id: 'addedDate', label: 'Qo"shilgan sana' },
    { id: 'admin', label: 'Moderator' },

  ];

  const rows = [
    {
      id: 'name',
      labelId: 'name',
      name: 'webbrain',
      group: 'Frontend',
      date: '21.05.2021',
      addedDate: '21.05.2021',
      admin: 'Webbrain Admin',

    },
    {
      id: 'name',
      labelId: 'name',
      name: 'webbrain',
      group: 'Frontend',
      date: '21.05.2021',
      addedDate: '21.05.2021',
      admin: 'Webbrain Admin',

    },
    {
      id: 'name',
      labelId: 'name',
      name: 'webbrain',
      group: 'Frontend',
      date: '21.05.2021',
      addedDate: '21.05.2021',
      admin: 'Webbrain Admin',
    },

  ]

  return (
    <Container>
      <GenericTable headCells={headCells} rows={rows} />

    </Container>
  )
}

export { AllLids }
