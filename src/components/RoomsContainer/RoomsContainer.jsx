import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  CircularProgress,
  IconButton,
  Popover,
  Typography,
  Paper,
  TextField,
  Button,
  Drawer,
  useMediaQuery,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuid } from 'uuid';

import Rooms from '../Rooms';
import { db } from '../../firebase';
import { setRooms, addRoom } from '../../store/actions';
import { KEYS } from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },
  popoverRoot: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 3),
  },
}));

const RoomsContainer = ({ collection, open, onClose }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState('');
  const loading = useSelector((state) => state.rooms.loading);
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('rooms').onSnapshot((response) => {
      const fetchedRooms = [];
      response.forEach((room) => {
        fetchedRooms.push(room.data());
      });
      dispatch(
        setRooms(fetchedRooms.sort((a, b) => (a.name > b.name ? 1 : -1))),
      );
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
      <Typography variant="body1">Add new room</Typography>
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
    <Drawer
      open={open}
      onClose={onClose}
      anchor={xs ? 'right' : 'left'}
      classes={{ paper: classes.root }}
    >
      <div className={classes.headerContainer}>
        <Typography variant="h5">Rooms</Typography>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <AddIcon />
        </IconButton>
      </div>
      <Rooms collection={collection} handleClose={onClose} />
      {loading && <CircularProgress />}
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
    </Drawer>
  );
};

export default RoomsContainer;
