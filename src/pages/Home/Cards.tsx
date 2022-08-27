import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 20px 40px;
`;

const StyledImg = styled.img`
  width: 600px;
  height: 400px;
`;
const Cards = ({ imgSrc, imgAlt }: { imgSrc: string; imgAlt: string }) => {
  return (
    <StyledCard>
      <StyledImg src={imgSrc} alt={imgAlt} />
    </StyledCard>
  );
};

export default Cards;
