import React from 'react'
import Heading from './../../../layout/Heading'

import { Container, Box } from '@mui/material'
import ContactForm from './../components/ContactForm'

const ContactView = () => {
  return (
    <Container maxWidth='md'>
      <Box mt={3}>
        <Heading heading='Contáctanos' />
        <ContactForm />
      </Box>
    </Container>
  )
}

export default ContactView
