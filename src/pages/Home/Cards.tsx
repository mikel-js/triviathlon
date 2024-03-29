import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../constants';

type categoryObject = { imgSrc: string; title: string; text: string };

const StyledCard = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 11rem;

  h1 {
    font-size: 1rem;

    @media (min-width: ${breakpoint.md}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.75rem;

    @media (min-width: ${breakpoint.md}) {
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${breakpoint.md}) {
    margin: 1.25rem 2.5rem;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 35vw;
  aspect-ratio: 1;
  @media (min-width: ${breakpoint.md}) {
    width: 25vw;
    height: 25vw;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = ({ imgSrc, title, text }: categoryObject) => {
  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledImg src={imgSrc} alt={title} />
        <StyledContent>
          <h1>{title}</h1>
          <p>{text}</p>
        </StyledContent>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Cards;
