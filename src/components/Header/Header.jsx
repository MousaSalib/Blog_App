import { AppBar, Grid, IconButton, Toolbar, Typography, useMediaQuery} from '@mui/material';
import MUILink from '@mui/material/Link';
import ReorderIcon from '@mui/icons-material/Reorder';
import React from 'react'
import Switch from '../Switch/Switch';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const {checked, onChange} = props
    const matches = useMediaQuery('(max-width:600px)')
  return (
    <>
        <AppBar>
          <Toolbar>
              <Grid container 
              direction={matches ? "column" : "row"}
              justifyContent={matches? "center": "space-between"} 
              >
                  <Grid item container xs="auto">
                      <Grid item><IconButton color='inherit'><ReorderIcon/></IconButton></Grid>
                      <Grid item><Typography variant='body1' component={"h1"} sx={{mt: 1}}>BLOG</Typography></Grid>
                  </Grid>
                  <Grid item container xs="auto" alignItems={'center'}>
                      <Grid item><MUILink sx={{marginRight: "1rem"}} component={Link} to={"/"} variant='button' underline='none' color="inherit">Home</MUILink></Grid>
                      <Grid item><MUILink sx={{marginRight: "1rem"}} component={Link} to={"/add"} variant='button' underline='none' color="inherit">Add Post</MUILink></Grid>
                      <Grid item><Switch checked= {checked} onChange={onChange}/></Grid>
                  </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar/>
    </>    
  )
}





