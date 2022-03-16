import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import hero from '../../img/hero.png'
import brush from '../../img/brush.png'

const Hero = () => {
  return (
    <Box
      position='relative'
      height={805}
      sx={{
        background: `url(${hero})`,
      }}
    >
      <Box className='hero-gradient' />
      <Box width={0.4} pl={15}>
        <Stack spacing={12}>
          <Typography pt={5} variant='h1'>
            Logo
          </Typography>
          <Box sx={{ position: 'relative', height: '17rem' }}>
            <img className='hero-brush' src={brush} alt='brush' />
            <Typography className='hero-heading' variant='h1'>
              El secreto de tu cocina
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
