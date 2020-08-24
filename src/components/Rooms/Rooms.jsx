import React from 'react';
import { List } from '@material-ui/core';

import Room from './Room';

const Rooms = ({ rooms, collection }) => {
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
