import React, { useEffect, useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {  makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import { useTheme } from '@mui/material/styles';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';

const useStyle = makeStyles({
    root: {
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
    },
    sidebar: {
        padding: "10px",
    }
})

export default function Home(props) {
    const classes = useStyle(props);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/?_page=${page}`;
        const fetchPosts = async () => {
            const response = await fetch(URL)
            const posts = await response.json();
            setPosts(posts)
        }
        fetchPosts()
        
    }, [page])
  return (
    <>
        <Post featured id={0} title="This is a featured post." content="This is a content"/>
        <Grid container 
        className={matches ? `${classes.root} ${classes.rootSm}` : `${classes.root} ${classes.rootNotSm}` } 
        justifyContent={"space-between"}
        direction={matches ? "column" : "row"}>
            <Grid container columnSpacing={1} item xs={7} className={classes.main} justifyContent={'center'}>
                <Grid item sm={12}>
                    <Typography variant='h4' component={"h4"} gutterBottom>Blog Posts</Typography>
                </Grid>
                {posts && posts.length > 0 ? posts.map((post) => {
                    return (
                        <Grid item md={6} key={post.id}>
                            <Post snippet id={post.id} title={post.title} content={post.body}/>
                        </Grid>
                    )
                }): (
                    <CircularProgress size={120}/>
                )}
                <Grid item xs={12}>
                    <Pagination count={10} color='primary' defaultPage={1} shape='rounded' onChange={(e, value) => setPage(value)}/>
                </Grid>
            </Grid>
            <Grid item xs={4} className={classes.sidebar}><Sidebar /></Grid>
        </Grid>
    </>
  )
}
