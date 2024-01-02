import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import AddPostForm from '../AddPostForm/AddPostForm'

export default function AddPost() {
  return (
    <>
      <Paper sx={{maxWidth: "80%", mx: 'auto', p: 2}} >
        <Typography variant='h4' component={'h1'}>Add Post</Typography>
        <Typography variant='body1' component={'p'}>Add your new post ! Using the form below</Typography>
        <Divider sx={{my: 3}}/>
        <AddPostForm />
      </Paper>
    </>
  )
}
