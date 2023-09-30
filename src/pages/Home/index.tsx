import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { breakpoint, color } from '../../constants';
import Cards from './Cards';
import { images, icons } from './CommonProps';
import triviathlonLogo from '../../assets/images/triviathlon.png';
import Discover from './Discover';

const Section = styled.div``;

const StyledHeading = styled.div`
  background-color: ${color.ORANGE1};
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    height: 40vh;
  }
`;

const StyledH1 = styled.h1`
  position: absolute;
  bottom: 1rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: ${breakpoint.md}) {
    font-size: 4rem;
  }
`;

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
    padding: 8rem 0 2rem 0;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  min-width: 300px;
`;

const index = () => {
  return (
    <Fragment>
      <Section>
        <StyledHeading>
          <StyledImgContainer>
            <StyledImg src={triviathlonLogo} />
          </StyledImgContainer>
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
