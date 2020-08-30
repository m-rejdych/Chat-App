import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteRoom } from '../../../store/actions';

const useStyles = makeStyles({
  text: {
    wordWrap: 'break-word',
  },
});

const Room = ({ id, name, selected, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <ListItem
      button
      divider
      component={Link}
      rel="noopener"
      to={`/chat/${name}`}
      selected={selected}
      onClick={handleClose}
    >
      <ListItemText className={classes.text} primary={`#${name}`} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => dispatch(deleteRoom(id))} edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Room;
