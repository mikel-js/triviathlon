import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { color } from '../../constants';
import Cards from './Cards';
import general_knowledge from '../../assets/images/general_knowledge.jpg';
import basketball from '../../assets/images/basketball.jpg';
import dogs from '../../assets/images/dogs.jpg';
import geography from '../../assets/images/geography.jpg';

const Section = styled.div`
  min-height: 100%;
  height: 100vh;
`;

const StyledHeading = styled.div`
  background-color: ${color.ORANGE1};
  height: 30vh;
`;

const StyledContent = styled.div`
  background-color: ${color.YELLOW1};
  height: 70vh;
`;

const index = () => {
  const imagesMap = [
    { imgSrc: general_knowledge, title: 'General Knowledge' },
    { imgSrc: basketball, title: 'Sports' },
    { imgSrc: dogs, title: 'Animals' },
    { imgSrc: geography, title: 'Geography' },
  ];
  return (
    <Section>
      <StyledHeading>
        <h1>Triviathlon</h1>
        <p>Test your mental endurance</p>
      </StyledHeading>
      <StyledContent>
        <Marquee pauseOnHover gradient={false} speed={100}>
          {imagesMap.map(
            ({ imgSrc, title }: { imgSrc: string; title: string }) => (
              <Cards imgSrc={imgSrc} imgAlt={title} />
            )
          )}
        </Marquee>
      </StyledContent>
    </Section>
  );
};

export default index;
