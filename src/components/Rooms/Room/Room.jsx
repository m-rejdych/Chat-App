import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';

const Room = ({ name, selected }) => {
  return (
    <ListItem
      button
      divider
      component={Link}
      rel="noopener"
      to={`/chat/${name}`}
      selected={selected}
    >
      <ListItemText primary={`#${name}`} />
    </ListItem>
  );
};

export default Room;
