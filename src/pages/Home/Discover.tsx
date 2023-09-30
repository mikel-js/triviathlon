import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import styled from 'styled-components';
import { Difficulty, fetchQuizQuestions } from '../../API';
import { color } from '../../constants';
import Question from './Question';
import Modal from '../Shared/Modal';

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

export type answerObject = {
  diff: number;
};

export type userAnswerObject = {
  diff: string;
  ans: string;
};

const StyledDiscovery = styled.div`
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
  }
`;

const StyledLeftSectionContainer = styled.div`
  background-color: ${color.BLUE1};
`;

const StyledLeftSection = styled.div`
  margin: 2rem;
`;

const StyledRightSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.PINK1};
  padding: 2em 0;
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const StyledIconContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
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
  font-size: 2.5rem;
  margin-left: 24px;
`;

const StyledImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 3.5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button<{ isSubmitted?: boolean }>`
  cursor: pointer;
  background-color: #99ffff;
  border: none;
  font-size: 1.5rrem;
  border-radius: 10px;
  margin-top: 2rrem;
  padding: 5px 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  ${({ isSubmitted }) => isSubmitted && 'pointer-events: none;'}
`;

const StyledQuestion = styled(Question)`
  > h1 {
    font-size: 1.5rem;
  }
  > h2 {
    font-size: 1.2rem;
  }
`;

const Discover = ({ icons }: { icons: { imgSrc: string; text: string }[] }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [questions, setQuestions] = useState<Level>({});
  const [userAnswer, setUserAnswer] = useState<number[]>([-1, -1, -1]);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const newQuestions = async (categoryId: any) => {
    setLoading(true);
    setQuestions({});
    const randomNumber = Math.floor(Math.random() * 9) + 1;
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
    if (easyQuestions && mediumQuestions && hardQuestions) {
      setLoading(false);
      const questionsArray = {
        easy: easyQuestions[randomNumber],
        medium: mediumQuestions[randomNumber],
        hard: hardQuestions[randomNumber],
      };

      setQuestions(questionsArray);
    }
  };

  useEffect(() => {
    newQuestions(11);
  }, []);

  const onCategorySelect = (num: number) => {
    setActiveCategory(num);
    const getCategoryid = () => {
      switch (num) {
        case 0:
          return 23;
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
    setUserAnswer([-1, -1, -1]);
    setIsSubmitted(false);
  };

  const onAnswerSelect = (diff: string, ans: number): void => {
    const userAnswerClone = [...userAnswer];
    if (diff === 'easy') {
      userAnswerClone[0] = ans;
      console.log(Object.values(userAnswerClone[0]));
    }
    if (diff === 'medium') {
      userAnswerClone[1] = ans;
    }
    if (diff === 'hard') {
      userAnswerClone[2] = ans;
    }
    setUserAnswer(userAnswerClone);
  };

  const onSubmit = () => setIsSubmitted(true);

  return (
    <StyledDiscovery>
      <StyledLeftSectionContainer>
        <StyledLeftSection>
          <h1>Get a glimpse!</h1>
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
      </StyledLeftSectionContainer>
      <StyledRightSection>
        <StyledQuestion
          difficulty={Difficulty.EASY}
          questions={questions}
          onAnswerSelect={onAnswerSelect}
          activeAnswer={userAnswer[0]}
          isSubmitted={isSubmitted}
        />
        <StyledQuestion
          difficulty={Difficulty.MEDIUM}
          questions={questions}
          onAnswerSelect={onAnswerSelect}
          activeAnswer={userAnswer[1]}
          isSubmitted={isSubmitted}
        />
        <StyledQuestion
          difficulty={Difficulty.HARD}
          questions={questions}
          onAnswerSelect={onAnswerSelect}
          activeAnswer={userAnswer[2]}
          isSubmitted={isSubmitted}
        />
        <StyledButtonContainer>
          <StyledButton
            onClick={onSubmit}
            disabled={isSubmitted}
            isSubmitted={isSubmitted}
          >
            Submit
          </StyledButton>
        </StyledButtonContainer>
      </StyledRightSection>
      {loading && (
        <Modal childComp={<HashLoader color='yellow' size='150' />} />
      )}
    </StyledDiscovery>
  );
};

export default Discover;
