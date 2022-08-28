import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { color } from '../../constants';
import Cards from './Cards';
import general_knowledge from '../../assets/images/general_knowledge.jpg';
import basketball from '../../assets/images/basketball.jpg';
import dogs from '../../assets/images/dogs.jpg';
import geography from '../../assets/images/geography.jpg';
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
  const imagesMap = [
    {
      imgSrc: general_knowledge,
      title: 'General Knowledge',
      text: 'Knowledge is power',
    },
    { imgSrc: basketball, title: 'Sports', text: 'Play like a champion' },
    { imgSrc: dogs, title: 'Animals', text: 'We all love animals' },
    {
      imgSrc: geography,
      title: 'Geography',
      text: 'No boundaries with Geography',
    },
    {
      imgSrc: general_knowledge,
      title: 'General Knowledge',
      text: 'Knowledge is power',
    },
    { imgSrc: basketball, title: 'Sports', text: 'Play like a champion' },
    { imgSrc: dogs, title: 'Animals', text: 'We all love animals' },
    {
      imgSrc: geography,
      title: 'Geography',
      text: 'No boundaries with Geography',
    },
  ];
  return (
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
  );
};

export default index;
