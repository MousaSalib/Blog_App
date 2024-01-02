import  FeaturedPost  from "../FeaturedPost/FeaturedPost";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import MUILink from '@mui/material/Link'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import Controls from "../Controls/Controls";

const useStyles = makeStyles({
    root: {
        marginBottom: "1rem"
    }
    
})
export default function Post(props) {
    const classes = useStyles(props);
    const {id, title, content, featured, snippet} = props;
  return (
    <>
    {featured && <FeaturedPost id={id} title={title} content={content}/>}
    {!featured && 
      <Card raised className={classes.root}>
        <Controls postId={id}/>
        <CardContent>
            <Typography variant='h6' component={"h3"} gutterBottom>
              {snippet ? title.slice(0, 15) : title}
            </Typography>
            <Typography variant='body1' component={"p"}>
              {snippet ? content.slice(0, 50) : content}
            </Typography>
        </CardContent>
        {snippet && 
          (
            <CardActions>
              <Button variant='contained' fullWidth>
                <MUILink component={Link} variant='button' underline='none' to={`/single/${id}`} color={'inherit'}>
                  Read More
                </MUILink>
              </Button>
            </CardActions>
          )}
      </Card>
    }
    </>
  )
}
