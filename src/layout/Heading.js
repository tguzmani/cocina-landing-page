import React from 'react'
import { Typography, Box } from '@mui/material'
import brush from '../img/brush.png'

const Heading = ({ heading }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '130px',
      }}
    >
      <Typography variant='h2'>{heading}</Typography>
      <img src={brush} alt='brush' className='brush' />
    </Box>
  )
}

export default Heading
