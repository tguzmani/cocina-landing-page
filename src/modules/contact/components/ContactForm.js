import React from 'react'

import MuiTextField from '@mui/material/TextField'
import { Grid, InputLabel, Typography, Button, Stack } from '@mui/material'

import { styled } from '@mui/system'

import useForm from '../../../layout/hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { subscribeToNewsletter } from '../contact.actions'

import { LoadingButton } from '@mui/lab'

const TextField = styled(MuiTextField)({
  '& fieldset': {
    borderRadius: 0,
  },
})

const Label = ({ label }) => (
  <InputLabel>
    <Typography gutterBottom variant='formLabel'>
      {label.toUpperCase()}
    </Typography>
  </InputLabel>
)

const ContactForm = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.contact)

  const [contact, bindField, areFieldsEmpty] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  })

  const handleSendForm = () => {
    dispatch(subscribeToNewsletter(contact))
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Label label='Nombre'></Label>
          <TextField {...bindField('firstname')} fullWidth />
        </Grid>

        <Grid item lg={6}>
          <Label label='Apellido'></Label>
          <TextField {...bindField('lastname')} fullWidth />
        </Grid>

        <Grid item lg={6}>
          <Label label='Email'></Label>
          <TextField {...bindField('email')} type='email' fullWidth />
        </Grid>

        <Grid item lg={6}>
          <Label label='Teléfono'></Label>
          <TextField {...bindField('phone')} type='number' fullWidth />
        </Grid>
      </Grid>

      <Stack my={4} direction='row' justifyContent='flex-end'>
        <LoadingButton
          className='contact'
          onClick={handleSendForm}
          disableElevation
          variant='contained'
          disabled={areFieldsEmpty}
          loading={loading}
        >
          Enviar
        </LoadingButton>
      </Stack>
    </>
  )
}

export default ContactForm
