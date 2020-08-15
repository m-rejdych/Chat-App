import React, { useState } from 'react';
import {
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerText: {
    color: '#fff',
  },
  cardContent: {
    width: '100%',
  },
}));

const GuestAuth = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();

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
          variant="filled"
          label="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" disabled={value === ''}>
          Jump in
        </Button>
      </CardActions>
    </>
  );
};

export default GuestAuth;
