import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants';

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
  return (
    <Section>
      <StyledHeading>
        <h1>Triviathlon</h1>
        <p>Test your mental endurance</p>
      </StyledHeading>
      <StyledContent>content</StyledContent>
    </Section>
  );
};

export default index;
