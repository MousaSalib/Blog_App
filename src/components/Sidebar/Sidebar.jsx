import { Card, CardContent, MenuItem, MenuList, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    rootCard: {
        marginBottom: "1rem"
    }
})

export default function Sidebar(props) {
    const classes = useStyles(props)
  return (
    <>
      <Card raised className={classes.rootCard}>
        <CardContent>
            <Typography variant='h6' component={"h3"}>About</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam deserunt? Omnis ea exercitationem culpa.</Typography>
        </CardContent>
      </Card>
      <Card raised className={classes.rootCard}>
        <CardContent>
            <Typography variant='h6' component={"h3"}>Category</Typography>
            <MenuList>
                <MenuItem>Sport</MenuItem>
                <MenuItem>Music</MenuItem>
                <MenuItem>News</MenuItem>
                <MenuItem>Health</MenuItem>
            </MenuList>
        </CardContent>
      </Card>
    </>
  )
}
