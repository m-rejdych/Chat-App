import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Popover,
  Typography,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

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
  popoverRoot: {
    padding: theme.spacing(3),
  },
}));

const RoomsContainer = ({ collection }) => {
  const classes = useStyles();
  const [rooms, setRooms] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    db.collection('rooms').onSnapshot((response) => {
      const fetchedRooms = [];
      response.forEach((room) => {
        fetchedRooms.push(room.data());
      });
      setRooms(fetchedRooms);
    });
  }, []);

  const handleAddRoom = () => {};

  const popoverContent = (
    <Paper className={classes.popoverRoot}>
      <Typography variant="body1">Add new channel</Typography>
      <TextField value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        variant="contained"
        disabled={value.trim() === ''}
        onClick={handleAddRoom}
      >
        ADD
      </Button>
    </Paper>
  );

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        title="Rooms"
        action={
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <SettingsIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.overflowYAuto}>
        <Popover
          id={anchorEl && 'popover'}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          {popoverContent}
        </Popover>
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
