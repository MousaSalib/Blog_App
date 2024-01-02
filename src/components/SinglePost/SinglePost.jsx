import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {  makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';


const useStyle = makeStyles({
    root: {
        // background: "gray",
        maxWidth: "90%",
    },
    rootNotSm: {
        margin: "1rem auto",
    },
    rootSm: {
        margin: "2.9rem auto"
    },
    main: {
        padding: "10px",
        // background: "red",
    },
    sidebar: {
        padding: "10px",
        // background: "yellow",
    }
})

export default function Home(props) {
    const classes = useStyle(props);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const {id} = useParams()
    const [post, setPost] = useState(undefined);
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const fetchPost = async () => {
            const response = await fetch(URL)
            const post = await response.json();
            setPost(post)
        }
        fetchPost()
        
    }, [id])
  return (
    <>
        <Grid container 
        className={matches ? `${classes.root} ${classes.rootSm}` : `${classes.root} ${classes.rootNotSm}` } 
        justifyContent={"space-between"}
        direction={matches ? "column" : "row"}>
            <Grid columnSpacing={1} item xs={7} className={classes.main} justifyContent={'center'}>
                {post ?  (
                    <>
                        <Post id={post.id} title={post.title} content={post.body}/>
                    </>

                ): <CircularProgress size={120} />}
            </Grid>
            <Grid item xs={4} className={classes.sidebar}><Sidebar /></Grid>
        </Grid>
    </>
  )
}

