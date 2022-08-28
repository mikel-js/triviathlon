import React, { useState } from 'react';
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

  > h1 {
  }
`;

const StyledRightSection = styled.div`
  background-color: ${color.PINK1};
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const StyledIconContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  padding: 1vw 2.5vw;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    padding-left: 3.5vw;
    ${({ isActive }) => !isActive && `background-color: ${color.RED2};`}
  }

  ${({ isActive }) =>
    isActive && `background-color: ${color.RED1}; padding-left: 3.5vw;`}
`;

const StyledText = styled.p`
  font-size: 60px;
  margin-left: 24px;
`;

const StyledImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 4.8rem;
`;

const Discover = ({ icons }: { icons: { imgSrc: string; text: string }[] }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const onCategorySelect = (num: number) => {
    setActiveCategory(num);
  };
  return (
    <StyledDiscovery>
      <StyledLeftSection>
        <h1>Get a glimpse of the trivia</h1>
        <StyledCategories>
          {icons.map(({ imgSrc, text }, index) => {
            const isActive = index === activeCategory;
            return (
              <StyledIconContainer
                key={text}
                isActive={isActive}
                onClick={() => onCategorySelect(index)}
              >
                <StyledImg src={imgSrc} alt={text} />
                <StyledText>{text}</StyledText>
              </StyledIconContainer>
            );
          })}
        </StyledCategories>
      </StyledLeftSection>
      <StyledRightSection>Right</StyledRightSection>
    </StyledDiscovery>
  );
};

export default Discover;
