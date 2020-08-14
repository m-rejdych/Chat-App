import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import gsap from 'gsap';

import LandingCard from './LandingCard';
import AuthCard from './AuthCard';
import { AUTH_TYPES } from '../../constants';
import { setUserAuth, setGuestAuth } from '../../store/actions';

const Cards = () => {
  const [landingOnTop, setLandingOnTop] = useState(true);
  const landingCardRef = useRef(null);
  const authCardRef = useRef(null);
  const dispatch = useDispatch();

  const switchCards = (type) => {
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
  };

  return (
    <Box position="relative" width={400} height={500}>
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
