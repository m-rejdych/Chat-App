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
    padding: theme.spacing(2),
    height: 290,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  overflowYAuto: {
    overflowY: 'auto',
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
      <CardContent className={classes.overflowYAuto}>
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
