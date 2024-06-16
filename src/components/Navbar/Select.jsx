import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const GenericSelect = () => {
  const [lang, setLange] = useState('Uzbek')
  const handleChange = (event) => {
    setLange(event.target.value)
  }
  return (
    <FormControl fullWidth
      sx={{ m: 1, minWidth: 120, width: 150 }}
      size='small'
    >
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        label="Language"
        onChange={handleChange}
        style={{ width: '150px', height: '40px' }}
      >
        <MenuItem value={'Uzbek'}>Uzbek</MenuItem>
        <MenuItem value={'Russian'}>Russian</MenuItem>
        <MenuItem value={'English'}>Usa</MenuItem>
      </Select>
    </FormControl>
  )
}

export default GenericSelect
