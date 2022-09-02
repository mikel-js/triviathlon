import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Category, Difficulty, fetchQuizQuestions } from '../../API';
import { color } from '../../constants';
import Question from './Question';

export type questionObject = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  choices: [];
};

export type Level = {
  easy?: questionObject;
  medium?: questionObject;
  hard?: questionObject;
};

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
  const [questions, setQuestions] = useState<Level>({});

  const newQuestions = async (categoryId: any) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const easyQuestions = await fetchQuizQuestions(
      10,
      categoryId,
      Difficulty.EASY
    );
    const mediumQuestions = await fetchQuizQuestions(
      10,
      categoryId,
      Difficulty.MEDIUM
    );
    const hardQuestions = await fetchQuizQuestions(
      10,
      categoryId,
      Difficulty.HARD
    );
    const questionsArray = {
      easy: easyQuestions[randomNumber],
      medium: mediumQuestions[randomNumber],
      hard: hardQuestions[randomNumber],
    };
    setQuestions(questionsArray);
    console.log({ questionsArray });
  };

  useEffect(() => {
    newQuestions(11);
  }, []);

  const onCategorySelect = (num: number) => {
    setActiveCategory(num);
    const getCategoryid = () => {
      switch (num) {
        case 0:
          return 11;
        case 1:
          return 21;
        case 2:
          return 9;
        case 3:
          return 27;
        case 4:
          return 22;
        case 5:
          return 28;
        case 6:
          return 20;
      }
    };
    newQuestions(getCategoryid());
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
      <StyledRightSection>
        <Question difficulty={Difficulty.EASY} questions={questions} />
        <Question difficulty={Difficulty.MEDIUM} questions={questions} />
        <Question difficulty={Difficulty.HARD} questions={questions} />
      </StyledRightSection>
    </StyledDiscovery>
  );
};

export default Discover;
