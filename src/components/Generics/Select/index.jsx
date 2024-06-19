import React, { useState } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'

const GenericSelect = (props) => {
  const { data } = props

  const [defaultValue, setdefaultValue] = useState(
    props?.value || (data && data[0]?.title)
  );
  const handleChange = (event) => {
    setLange(event.target.value)
  }
  return (
    <FormControl fullWidth
      sx={{ m: 1, minWidth: 120, width: 150 }}
      size='small'>
      <Select
        sx={{ color: "#929FAF", borderColor: '#929FAF' }}
        value={defaultValue || "Select"}
        onChange={handleChange}
        style={{ width: '150px', height: '40px' }}
      >
        {data?.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item?.title}>
              {item.title}
            </MenuItem>
          );
        })}

      </Select>
    </FormControl>
  )
}

export default GenericSelect