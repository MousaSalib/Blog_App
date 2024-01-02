import React, { useEffect, useState } from 'react';
import { Divider, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import UpdatePostForm from '../UpdatePostForm/UpdatePostForm'
export default function UpdatePost() {
  const {id} = useParams();
  const [post, setPost] = useState(undefined);
  useEffect(() => {
      const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const fetchPost = async () => {
          const response = await fetch(URL)
          const post = await response.json();
          setPost(post)
      }
      fetchPost()
      
  }, [id]);

  return (
    <>
      <Paper sx={{maxWidth: "80%", mx: 'auto', p: 2}} >
        <Typography variant='h4' component={'h1'}>Update Post - {id}</Typography>
        <Typography variant='body1' component={'p'}>Add your new post ! Using the form below</Typography>
        <Divider sx={{my: 3}}/>
        {post && <UpdatePostForm postData={post} />}
      </Paper>
    </>
  )
}


