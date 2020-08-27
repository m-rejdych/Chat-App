import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';

import Room from './Room';

const Rooms = ({ collection }) => {
  const rooms = useSelector((state) => state.rooms.rooms);

  return (
    <List>
      {rooms.map((room) => {
        return (
          <Room key={room.id} selected={room.name === collection} {...room} />
        );
      })}
    </List>
  );
};
export default Rooms;
