import React, { useState } from 'react';
import {
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  FormControlLabel,
  Switch,
  Button,
  TextField,
} from '@material-ui/core';
import { Formik, Field } from 'formik';

const useStyles = makeStyles((theme) => ({
  header: {
    color: '#fff',
  },
  switchText: {
    fontSize: 14,
  },
  cardContent: {
    width: '100%',
  },
  cardActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const UserAuth = () => {
  const classes = useStyles();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const initialValues = isLoggingIn
    ? {
        name: '',
        password: '',
      }
    : {
        name: '',
        email: '',
        password: '',
      };

  const fields = [
    isLoggingIn || {
      name: 'name',
      type: 'text',
      label: 'Name',
      validate: (value) => {
        const errorMessage = value.length < 2 && 'Name is too short!';
        return errorMessage;
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validate: (value) => {
        const errorMessage =
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value,
          ) && 'Enter a valid email address!';
        return errorMessage;
      },
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      validate: (value) => {
        const errorMessage =
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) &&
          'Password must be at least 8 characters long and contain letter and number!';
        return errorMessage;
      },
    },
  ];

  const renderFields = () =>
    fields.map(
      ({ name, type, label, validate }) =>
        name && (
          <Field name={name} validate={validate}>
            {({ field, meta }) => (
              <TextField
                {...field}
                className={classes.textField}
                variant="filled"
                type={type}
                label={label}
                error={meta.error && meta.touched}
                helperText={meta.touched && meta.error}
                fullWidth
              />
            )}
          </Field>
        ),
    );

  const form = (
    <Formik initialValues={initialValues}>{() => renderFields()}</Formik>
  );

  return (
    <>
      <CardHeader
        titleTypographyProps={{
          variant: 'h4',
          className: classes.header,
        }}
        title={isLoggingIn ? 'Log in' : 'Sign up'}
      />
      <CardContent className={classes.cardContent}>{form}</CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" color="primary">
          {isLoggingIn ? 'Log in' : 'Sign up'}
        </Button>
        <FormControlLabel
          classes={{ label: classes.switchText }}
          control={
            <Switch
              checked={isLoggingIn}
              onChange={() => setIsLoggingIn(!isLoggingIn)}
              color="primary"
            />
          }
          label={isLoggingIn ? 'Sign up' : 'Log in'}
        />
      </CardActions>
    </>
  );
};

export default UserAuth;
