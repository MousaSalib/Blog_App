import { Button, TextField } from '@mui/material';
import Validation from '../Validation/Validation';
import React, { useState } from 'react'

export default function AddPostForm() {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({title: "", body: ""});
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        })
    }
    console.log(values);
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = values.title ? values.title.trim() : values.title;
        const body = values.body ? values.body.trim() : values.body;
        const validationErrors = Validation(title, body);
        setErrors(validationErrors)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Post Title" 
                fullWidth 
                sx={{mb: 2}} 
                name='title' 
                value={values.title} 
                onChange={handleInputChange}
                error={!!errors.title}
                helperText={errors.title && errors.title}/>
            <TextField 
            label="Post Content" 
            fullWidth 
            sx={{mb: 2}} 
            multiline rows={6} 
            name='body' 
            value={values.body} 
            onChange={handleInputChange}
            error={!!errors.body}
            helperText={errors.body && errors.body}/>
            <Button type='submit' variant='contained' fullWidth>SUBMIT</Button>
        </form>
    </>
  )
}
