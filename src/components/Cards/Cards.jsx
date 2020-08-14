import React, { useRef, useState } from 'react';
import { Box } from '@material-ui/core';
import gsap from 'gsap';

import FirstCard from './FirstCard';
import SecondCard from './SecondCard';

const Cards = () => {
  const [firstOnTop, setFirstOnTop] = useState(true);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);

  const switchCards = () => {
    const firstCard = firstCardRef.current;
    const secondCard = secondCardRef.current;

    setTimeout(() => setFirstOnTop(false), 500);

    const tl = gsap.timeline();

    tl.to(firstCard, {
      x: '+=175',
      y: '-=40',
      duration: 0.4,
      ease: 'power3.inOut',
    })
      .to(
        secondCard,
        { x: '-=175', y: '+=40', duration: 0.4, ease: 'power3.inOut' },
        '-=0.4',
      )
      .to(firstCard, {
        x: '-=235',
        y: '+=90',
        duration: 0.4,
        ease: 'power3.inOut',
      })
      .to(
        secondCard,
        { x: '+=235', y: '-=90', duration: 0.4, ease: 'power3.inOut' },
        '-=0.4',
      );

    // gsap.to(firstCard, { x: '+=175', y: '-=40', duration: 1 });
    // gsap.to(secondCard, { x: '-=175', y: '+=40', duration: 1 });
  };

  return (
    <Box position="relative" width={400} height={500}>
      <FirstCard
        ref={firstCardRef}
        isOnTop={firstOnTop}
        switchCards={switchCards}
      />
      <SecondCard ref={secondCardRef} isOnTop={!firstOnTop} />
    </Box>
  );
};

export default Cards;
