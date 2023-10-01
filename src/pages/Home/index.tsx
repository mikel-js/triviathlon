import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../constants';
import { images, icons } from './CommonProps';
import triviathlonLogo from '../../assets/images/triviathlon.png';
import Discover from './Discover';
import Carousel from './Carousel';
import ThemeButtons from './ThemeButtons';
import { Theme, ThemeProvider, useTheme } from '../../contexts/ThemeContext';

const Section = styled.div``;

const StyledHeading = styled.div<{ theme: Theme }>`
  background-color: ${color.ORANGE1};
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    height: 40rem;
  }

  ${({ theme }) =>
    theme === 'Dark Mode' && `background-color: ${color.PURPLE1};`}
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
    bottom: 4rem;
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

const Home = () => {
  const { theme } = useTheme();
  return (
    <Fragment>
      <Section>
        <h1>{theme}</h1>
        <StyledHeading theme={theme}>
          <StyledImgContainer>
            <StyledImg src={triviathlonLogo} />
          </StyledImgContainer>
          <StyledH1>Test your mental endurance</StyledH1>
        </StyledHeading>
        <ThemeButtons />
        <Carousel images={images} />
      </Section>
      <Discover icons={icons} />
    </Fragment>
  );
};

export default Home;
