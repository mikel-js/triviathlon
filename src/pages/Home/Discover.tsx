import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants';

const StyledDiscovery = styled.div`
  min-height: 100%;
  height: 100vh;
  display: flex;

  > div {
    flex: 1;
  }
`;

const StyledLeftSection = styled.div`
  background-color: ${color.BLUE1};
  padding: 48px;
`;

const StyledRightSection = styled.div`
  background-color: ${color.PINK1};
`;

const StyledImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 4.8rem;
`;

const Discover = ({ icons }: { icons: {} }) => {
  return (
    <StyledDiscovery>
      <StyledLeftSection>
        <h1>Get a glimpse of the trivia</h1>
      </StyledLeftSection>
      <StyledRightSection>Right</StyledRightSection>
    </StyledDiscovery>
  );
};

export default Discover;
