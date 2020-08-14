import React, { useEffect, useRef, forwardRef } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  makeStyles,
  Button,
} from '@material-ui/core';
import gsap from 'gsap';

import { ReactComponent as MessagesSvg } from '../../../assets/MessagesSvg.svg';
import { AUTH_TYPES } from '../../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: 30,
    bottom: 25,
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    zIndex: ({ isOnTop }) => (isOnTop ? 2 : 1),
  },
  svg: {
    width: 300,
    height: 220,
  },
  header: {
    color: '#fff',
  },
  button: {
    width: '50%',
    height: '100%',
  },
}));

const LandingCard = forwardRef(({ switchCards, isOnTop }, ref) => {
  const classes = useStyles({ isOnTop });
  const elementRef = useRef(null);
  const userButtonRef = useRef(null);
  const guestButtonRef = useRef(null);

  useEffect(() => {
    const [element] = elementRef.current.children;

    const userButton = userButtonRef.current;
    const guestButton = guestButtonRef.current;

    const circle = element.getElementById('circle');
    const eclipse = element.getElementById('eclipse');
    const chat1 = element.getElementById('chat-1');
    const chat2 = element.getElementById('chat-2');
    const chat3 = element.getElementById('chat-3');
    const leaf1 = element.getElementById('leaf-1');
    const leaf2 = element.getElementById('leaf-2');
    const leaf3 = element.getElementById('leaf-3');
    const leaf4 = element.getElementById('leaf-4');

    const tl = gsap.timeline();
    tl.set(
      [
        circle,
        eclipse,
        chat1,
        chat2,
        chat3,
        leaf1,
        leaf2,
        leaf3,
        leaf4,
        userButton,
        guestButton,
      ],
      {
        autoAlpha: 0,
      },
    );
    tl.set([leaf1, leaf2, leaf3, leaf4], { transformOrigin: 'center bottom' });

    tl.fromTo(
      eclipse,
      { y: '+=300' },
      { y: '-=300', autoAlpha: 1, duration: 1, ease: 'power3.inOut' },
    )
      .fromTo(
        circle,
        { y: '-=1000' },
        { y: '+=1000', autoAlpha: 1, duration: 1, ease: 'power2.inOut' },
        '-=0.3',
      )
      .fromTo(
        chat1,
        { x: '+=300' },
        { x: '-=300', autoAlpha: 1, duration: 1, ease: 'elastic' },
      )
      .fromTo(
        chat2,
        { x: '-=300' },
        { x: '+=300', autoAlpha: 1, duration: 1, ease: 'elastic' },
        '-=0.5',
      )
      .fromTo(
        chat3,
        { x: '+=300' },
        { x: '-=300', autoAlpha: 1, duration: 1, ease: 'elastic' },
        '-=0.5',
      )
      .fromTo(
        [leaf1, leaf2, leaf3, leaf4],
        { y: '-=50' },
        {
          autoAlpha: 1,
          duration: 0.3,
          y: '+=50',
          ease: 'slow',
          stagger: 0.3,
        },
      )
      .fromTo(
        [userButton, guestButton],
        { y: '+=30' },
        { y: '-=30', duration: 0.5, autoAlpha: 1, ease: 'power3.inOut' },
      );
  }, []);

  const handleClick = (type) => {
    switchCards(type);
  };

  return (
    <Card ref={ref} className={classes.root} elevation={5}>
      {isOnTop && (
        <>
          <CardHeader
            title="Chat App"
            titleTypographyProps={{
              variant: 'h3',
              align: 'center',
              className: classes.header,
            }}
          />
          <CardContent>
            <div ref={elementRef}>
              <MessagesSvg className={classes.svg} />
            </div>
          </CardContent>
          <CardActions>
            <Button
              ref={userButtonRef}
              className={classes.button}
              color="secondary"
              variant="contained"
              onClick={() => handleClick(AUTH_TYPES.USER)}
            >
              Sign up
            </Button>
            <Button
              ref={guestButtonRef}
              className={classes.button}
              variant="outlined"
              onClick={() => handleClick(AUTH_TYPES.GUEST)}
            >
              Enter as guest
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
});

export default LandingCard;
