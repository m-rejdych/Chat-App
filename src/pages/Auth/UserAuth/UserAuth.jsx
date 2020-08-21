import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  FormControlLabel,
  Switch,
  Button,
  TextField,
  CircularProgress,
  Box,
} from '@material-ui/core';
import { Formik, Field } from 'formik';

import { signUp, logIn } from '../../../store/actions';
import { KEYS } from '../../../constants';

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
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const initialValues = isLoggingIn
    ? {
        email: '',
        password: '',
      }
    : {
        name: '',
        email: '',
        password: '',
      };

  const fieldsData = [
    isLoggingIn || {
      name: 'name',
      type: 'text',
      label: 'Name',
      validate: (value) => value.length < 2 && 'Name is too short!',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validate: (value) =>
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value,
        ) && 'Enter a valid email address!',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      validate: (value) =>
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) &&
        'Password must be at least 8 characters long and contain letter and number!',
    },
  ];

  const handleSwitch = (handleFormReset) => {
    setIsLoggingIn(!isLoggingIn);
    handleFormReset();
  };

  const handleSubmit = (data) => {
    isLoggingIn ? dispatch(logIn(data)) : dispatch(signUp(data));
  };

  const handleEnterPress = (e, { isValid, values, submitForm }) => {
    if (e.key === KEYS.ENTER) {
      isValid ? handleSubmit(values) : submitForm();
    }
  };

  const fields = loading ? (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={200} />
    </Box>
  ) : (
    fieldsData.map(
      ({ name, validate, ...rest }) =>
        name && (
          <Field key={name} name={name} validate={validate}>
            {({ field, meta, form }) => (
              <TextField
                {...field}
                {...rest}
                className={classes.textField}
                variant="outlined"
                error={meta.error && meta.touched}
                helperText={meta.touched && meta.error}
                onKeyPress={(e) => handleEnterPress(e, form)}
                fullWidth
              />
            )}
          </Field>
        ),
    )
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
      <Formik initialValues={initialValues}>
        {({ isValid, dirty, handleReset, values }) => (
          <>
            <CardContent className={classes.cardContent}>{fields}</CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                disabled={!isValid || !dirty}
                variant="contained"
                color="primary"
                onClick={() => handleSubmit(values)}
              >
                {isLoggingIn ? 'Log in' : 'Sign up'}
              </Button>
              <FormControlLabel
                classes={{ label: classes.switchText }}
                control={
                  <Switch
                    checked={isLoggingIn}
                    onChange={() => handleSwitch(handleReset)}
                    color="default"
                  />
                }
                label={isLoggingIn ? 'Sign up' : 'Log in'}
              />
            </CardActions>
          </>
        )}
      </Formik>
    </>
  );
};

export default UserAuth;
