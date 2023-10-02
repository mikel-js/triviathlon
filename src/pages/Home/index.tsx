import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../constants';
import { images, icons } from './CommonProps';
import triviathlonLogo from '../../assets/images/triviathlon.png';
import Discover from './Discover';
import Carousel from './Carousel';
import ThemeButtons from './ThemeButtons';
import { Theme, ThemeProvider, useTheme } from '../../contexts/ThemeContext';

const StyledHome = styled.div<{ theme: Theme }>`
  color: #373737;
  ${({ theme }) => theme === 'Dark Mode' && `color: ${color.WHITE1}!important;`}
`;

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
    theme === 'Dark Mode' &&
    'background-image: linear-gradient(rgba(8,35,55,0),#082337);'}
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

  ${({ theme }) =>
    theme === 'Dark Mode' &&
    `filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(175deg) brightness(100%) contrast(104%);`}
`;

const Home = () => {
  const { theme } = useTheme();
  return (
    <StyledHome theme={theme}>
      <Section theme={theme}>
        <StyledHeading theme={theme}>
          <StyledImgContainer theme={theme}>
            <StyledImg theme={theme} src={triviathlonLogo} />
          </StyledImgContainer>
          <StyledH1>Test your mental endurance</StyledH1>
        </StyledHeading>
        <ThemeButtons />
        <Carousel images={images} />
      </Section>
      <Discover icons={icons} />
    </StyledHome>
  );
};

export default Home;
