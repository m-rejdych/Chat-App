import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';

import { guestLogIn } from '../../../store/actions';
import { KEYS } from '../../../constants';

const useStyles = makeStyles((theme) => ({
  headerText: {
    color: '#fff',
  },
  cardContent: {
    width: '100%',
  },
}));

const GuestAuth = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () =>
    dispatch(
      guestLogIn({
        name: `${value}(guest)`,
        userId: uuid(),
      }),
    );

  return (
    <>
      <CardHeader
        className={classes.cardHeader}
        titleTypographyProps={{
          variant: 'h4',
          className: classes.headerText,
        }}
        title="Enter your name"
      />
      <CardContent className={classes.cardContent}>
        <TextField
          variant="outlined"
          label="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) =>
            e.key === KEYS.ENTER && value.trim() !== '' && handleSubmit()
          }
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={value.trim() === ''}
        >
          Jump in
        </Button>
      </CardActions>
    </>
  );
};

export default GuestAuth;
