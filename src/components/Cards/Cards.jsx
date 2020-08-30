import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, useMediaQuery } from '@material-ui/core';
import gsap from 'gsap';

import LandingCard from './LandingCard';
import AuthCard from './AuthCard';
import { AUTH_TYPES } from '../../constants';
import { setUserAuth, setGuestAuth } from '../../store/actions';

const Cards = () => {
  const [landingOnTop, setLandingOnTop] = useState(true);
  const landingCardRef = useRef(null);
  const authCardRef = useRef(null);
  const xs = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (xs) {
      const landingCard = landingCardRef.current;
      const authCard = authCardRef.current;

      const tl = gsap.timeline();

      tl.fromTo(
        landingCard,
        { x: '-=30', y: '+=25' },
        { x: '+=0', y: '+=0', duration: 5 },
      )
        .fromTo(
          authCard,
          { x: '+=30', y: '-=25' },
          { x: '+=0', y: '+=0', duration: 5 },
          '-=5',
        )
        .to(landingCard, {
          x: '+=30',
          y: '-=25',
          duration: 1,
          ease: 'power3.inOut',
        })
        .to(
          authCard,
          { x: '-=30', y: '+=25', duration: 1, ease: 'power3.inOut' },
          '-=1',
        );
    }
  }, []);

  const switchCards = (type) => {
    if (xs) {
      const landingCard = landingCardRef.current;
      const authCard = authCardRef.current;

      setTimeout(() => {
        setLandingOnTop(false);
        type === AUTH_TYPES.USER && dispatch(setUserAuth());
        type === AUTH_TYPES.GUEST && dispatch(setGuestAuth());
      }, 500);

      const tl = gsap.timeline();

      tl.to(landingCard, {
        x: '+=175',
        y: '-=40',
        duration: 0.4,
        ease: 'power3.inOut',
      })
        .to(
          authCard,
          { x: '-=175', y: '+=40', duration: 0.4, ease: 'power3.inOut' },
          '-=0.4',
        )
        .to(landingCard, {
          x: '-=235',
          y: '+=90',
          duration: 0.4,
          ease: 'power3.inOut',
        })
        .to(
          authCard,
          { x: '+=235', y: '-=90', duration: 0.4, ease: 'power3.inOut' },
          '-=0.4',
        );
    } else {
      setLandingOnTop(false);
      type === AUTH_TYPES.USER && dispatch(setUserAuth());
      type === AUTH_TYPES.GUEST && dispatch(setGuestAuth());
    }
  };

  return (
    <Box
      position="relative"
      width={xs ? 400 : '100%'}
      height={xs ? 500 : '100%'}
    >
      <LandingCard
        ref={landingCardRef}
        isOnTop={landingOnTop}
        switchCards={switchCards}
      />
      <AuthCard ref={authCardRef} isOnTop={!landingOnTop} />
    </Box>
  );
};

export default Cards;
