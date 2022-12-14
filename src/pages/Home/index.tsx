import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { color } from '../../constants';
import Cards from './Cards';
import { images, icons } from './CommonProps';
import triviathlonLogo from '../../assets/images/triviathlon.png';
import Discover from './Discover';

const Section = styled.div``;

const StyledHeading = styled.div`
  background-color: ${color.ORANGE1};
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  position: relative;
`;

const StyledH1 = styled.h1`
  position: absolute;
  bottom: 1em;
  font-size: 4em;
  font-weight: 400;
`;

const StyledContent = styled.div`
  background-color: ${color.YELLOW1};
  text-align: center;
`;

const StyledTitle = styled.h1`
  padding: 108px 0 36px 0;
  font-size: 72px;
  font-weight: 400;
`;

const StyledImg = styled.img`
  height: 150px;
  width: 500px;
`;

const index = () => {
  return (
    <Fragment>
      <Section>
        <StyledHeading>
          <StyledImg src={triviathlonLogo} />
          <StyledH1>Test your mental endurance</StyledH1>
        </StyledHeading>
        <StyledContent>
          <StyledTitle>Check this out!</StyledTitle>
          <Marquee pauseOnHover gradient={false} speed={100}>
            {images.map(({ imgSrc, title, text }) => (
              <Cards imgSrc={imgSrc} title={title} text={text} />
            ))}
          </Marquee>
        </StyledContent>
      </Section>
      <Discover icons={icons} />
    </Fragment>
  );
};

export default index;
