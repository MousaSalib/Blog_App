import { Box, Typography } from '@mui/material'
import React from 'react'

export default function About(props) {
  const {title, content} = props
  return (
    <Box>
      <Typography variant='h4' component={'h1'} gutterBottom>{title}</Typography>
      <Typography variant='body1' component={'p'}>{content}</Typography>
    </Box>
  )
}
