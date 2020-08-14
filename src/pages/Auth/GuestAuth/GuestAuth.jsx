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
  header: {
    color: '#fff',
  },
}));

const GuestAuth = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  return (
    <>
      <CardHeader
        titleTypographyProps={{
          variant: 'h4',
          className: classes.header,
          align: 'center',
        }}
        title="Enter your name"
      />
      <CardContent>
        <TextField
          variant="filled"
          label="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
