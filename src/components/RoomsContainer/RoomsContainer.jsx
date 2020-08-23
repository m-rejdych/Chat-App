import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from '@material-ui/core';

import Rooms from '../Rooms';
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    bottom: 21.5,
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: 600,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
}));

const RoomsContainer = ({ collection }) => {
  const classes = useStyles();
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    db.collection('rooms').onSnapshot((response) => {
      const fetchedRooms = [];
      response.forEach((room) => {
        fetchedRooms.push(room.data());
      });
      setRooms(fetchedRooms);
    });
  }, []);

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader title="Rooms" />
      <CardContent>
        {rooms ? (
          <Rooms rooms={rooms} collection={collection} />
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
};

export default RoomsContainer;
