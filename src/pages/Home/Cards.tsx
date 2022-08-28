import React from 'react';
import styled from 'styled-components';
import { categoryObject } from '.';

const StyledCard = styled.div`
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 25vw;
`;
const Cards = ({ imgSrc, title, text }: categoryObject) => {
  return (
    <StyledCard>
      <StyledImg src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledCard>
  );
};

export default Cards;
