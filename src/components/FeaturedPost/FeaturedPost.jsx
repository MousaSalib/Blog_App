import { Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles({
    root: {
        margin: "3rem auto",
        padding: "1rem",
        maxWidth: "70%",
        background: "#555",
        color: "#fff",
        borderRadius: "20px"
    }
})
export default function FeaturedPost(props) {
    const classes = useStyles(props);
    const {id, title, content} = props
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={4}>
            <Typography variant='h6' component={"h3"} gutterBottom>{title}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
            <Typography variant='body1' component={'p'}>{content}</Typography>
            <Button variant='contained'>Read More</Button>
        </Grid>
      </Grid>
    </>
  )
}
