import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { color } from '../../constants';
import Cards from './Cards';
import { imagesMap } from './Images';
import triviathlonLogo from '../../assets/images/triviathlon.png';

export type categoryObject = { imgSrc: string; title: string; text: string };

const Section = styled.div`
  min-height: 100%;
  height: 100vh;
`;

const StyledHeading = styled.div`
  background-color: ${color.ORANGE1};
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
`;

const StyledContent = styled.div`
  background-color: ${color.YELLOW1};
  height: 70vh;
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
          <h1>Test your mental endurance</h1>
        </StyledHeading>
        <StyledContent>
          <Marquee pauseOnHover gradient={false} speed={100}>
            {imagesMap.map(({ imgSrc, title, text }: categoryObject) => (
              <Cards imgSrc={imgSrc} title={title} text={text} />
            ))}
          </Marquee>
        </StyledContent>
      </Section>
      <Section></Section>
    </Fragment>
  );
};

export default index;
