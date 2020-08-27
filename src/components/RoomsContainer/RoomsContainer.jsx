import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuid } from 'uuid';

import Rooms from '../Rooms';
import { db } from '../../firebase';
import { setRooms, addRoom } from '../../store/actions';
import { KEYS } from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: 500,
    minWidth: 250,
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'auto',
  },
  overflowAuto: {
    overflow: 'auto',
  },
  popoverRoot: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const RoomsContainer = ({ collection }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState('');
  const rooms = useSelector((state) => state.rooms.rooms);
  const loading = useSelector((state) => state.rooms.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('rooms').onSnapshot((response) => {
      const fetchedRooms = [];
      response.forEach((room) => {
        fetchedRooms.push(room.data());
      });
      dispatch(setRooms(fetchedRooms));
    });
  }, []);

  useEffect(() => () => value && setValue(''), []);

  const handleClose = () => {
    setAnchorEl(null);
    setValue('');
  };

  const handleAddRoom = () => {
    dispatch(addRoom({ name: value, id: uuid() }));
    handleClose();
  };

  const popoverContent = (
    <Paper className={classes.popoverRoot}>
      <Typography variant="body1">Add new channel</Typography>
      <TextField
        variant="outlined"
        label="Room name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === KEYS.ENTER && handleAddRoom()}
      />
      <Button
        color="secondary"
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
            <AddIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.overflowAuto}>
        <Popover
          id={anchorEl && 'popover'}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={!!anchorEl}
          onClose={handleClose}
        >
          {popoverContent}
        </Popover>
        {rooms.length > 0 && !loading ? (
          <Rooms collection={collection} />
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
};

export default RoomsContainer;
