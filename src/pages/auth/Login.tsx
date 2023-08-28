import { TextField, Box, FormControl, Input, FormHelperText, InputLabel, FormLabel } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Login = () => {
  return (
    <Container>
      <FormControl>
        <label>Email address</label>
        <TextField variant="outlined" />
      </FormControl>
    </Container>
  )
}

export default Login
