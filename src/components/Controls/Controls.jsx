import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom'; 
import Dialog from '../Dialog/Dialog';

export default function Controls(props) {
  const { postId } = props;
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const deleteAnItem = () => {
    console.log(`this post with id ${postId} will be deleted`);
    setDialogOpen(false);
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <IconButton color="primary" onClick={() => setOpen(!open)}>
            <ModeEditIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Link to={`/update/${postId}`}>
              <IconButton color="secondary">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton color="error" onClick={() => setDialogOpen(true)}>
              <DeleteIcon />
            </IconButton>
          </Collapse>
        </Grid>
      </Grid>
      <Dialog
        title="Delete an Item"
        text="Are you sure that you want to delete this item"
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        onDialogConfirm={deleteAnItem}
      />
    </>
  );
}
