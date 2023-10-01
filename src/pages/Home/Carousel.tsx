import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import Cards from './Cards';
import { breakpoint, color } from '../../constants';

export type imageObject = {
  imgSrc: string;
  title: string;
  text: string;
};

const StyledContent = styled.div`
  background-color: ${color.YELLOW1};
  text-align: center;
`;

const StyledTitle = styled.h1`
  padding: 1em 0;
  font-size: 2rem;
  font-weight: 400;

  @media (min-width: ${breakpoint.md}) {
    font-size: 4rem;
    padding: 4rem 0 2rem 0;
  }
`;

const Carousel = ({ images }: { images: imageObject[] }) => {
  return (
    <StyledContent>
      <StyledTitle>Check this out!</StyledTitle>
      <Marquee pauseOnHover gradient={false} speed={100}>
        {images.map(({ imgSrc, title, text }, i) => (
          <Cards imgSrc={imgSrc} title={title} text={text} key={i} />
        ))}
      </Marquee>
    </StyledContent>
  );
};

export default Carousel;
