import React, { useState } from 'react';
import styled from 'styled-components';
import { Difficulty } from '../../API';
import { Level, questionObject } from './Discover';
import { breakpoint, color } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import { commonIcons } from './CommonProps';

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  @media (min-width: ${breakpoint.md}) {
    margin: 0 4rem;
  }
`;
const StyledQuestionContainer = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-shadow: -1px 9px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 1.25rem;
  margin: 1em 0;

  ${({ bgColor }) => `background: ${bgColor};  border: solid 1px ${bgColor};`}

  > h1 {
    font-size: 1.5rem;
  }

  > h2 {
    font-size: 1.2rem;
  }
`;

const StyledChoiceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChoice = styled.p<{
  isActive: boolean;
  isCorrectChoice?: boolean;
  isSubmitted?: boolean;
  userAnswer?: boolean;
}>`
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: ${color.PINK2};

    ${({ theme }) => theme !== 'Default' && ` color: ${color.BLACK1};`}
  }

  ${({ isActive, isSubmitted }) =>
    isActive && !isSubmitted && 'background: #ffccff;'}

  ${({ isSubmitted }) => isSubmitted && 'pointer-events: none;'}

  ${({ isSubmitted, isCorrectChoice, userAnswer }) =>
    isSubmitted && isCorrectChoice && !userAnswer && 'background: #8cff66;'}
`;

const StyledImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Question: React.FC<{
  difficulty: Difficulty;
  questions: Level;
  onAnswerSelect: (diff: string, ans: number) => void;
  activeAnswer: number;
  isSubmitted?: boolean;
}> = ({ difficulty, questions, onAnswerSelect, activeAnswer, isSubmitted }) => {
  const getQuestion = (difficulty: Difficulty): questionObject | void => {
    if (questions) return questions[difficulty];
  };
  const question = getQuestion(difficulty);

  const [userAnswer, setUserAnswer] = useState(-1);

  const { theme } = useTheme();

  const onChoiceClick = (difficulty: string, index: number) => {
    onAnswerSelect(difficulty, index);
    setUserAnswer(index);
  };

  const cardColorMap = {
    easy: color.GREEN1,
    medium: color.YELLOW2,
    hard: color.RED3,
  };

  const darkCardColorMap = {
    easy: color.GREEN2,
    medium: color.YELLOW3,
    hard: color.RED4,
  };

  const colorTheme = theme === 'Dark Mode' ? darkCardColorMap : cardColorMap;

  return (
    <StyledQuestion>
      <StyledQuestionContainer bgColor={colorTheme[difficulty]}>
        <h1>{difficulty.toUpperCase()}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: question?.question || '' }}></h2>
        {question?.choices.map((choice, index) => {
          const isCorrectChoice =
            question.correct_answer === question.choices[index];
          const correctUserAnswer =
            question.choices[userAnswer] === question.correct_answer;
          const isActiveAnswer = index === activeAnswer;
          return (
            <StyledChoiceContainer>
              {isCorrectChoice && isSubmitted && correctUserAnswer && (
                <StyledImg src={commonIcons['checkIcon']} />
              )}

              {isSubmitted && !isCorrectChoice && isActiveAnswer && (
                <StyledImg src={commonIcons['crossIcon']} />
              )}
              <StyledChoice
                dangerouslySetInnerHTML={{ __html: choice || '' }}
                isActive={isActiveAnswer}
                onClick={() => onChoiceClick(difficulty, index)}
                isSubmitted={isSubmitted}
                userAnswer={correctUserAnswer}
                isCorrectChoice={isCorrectChoice}
                theme={theme}
                key={index}
              />
            </StyledChoiceContainer>
          );
        })}
      </StyledQuestionContainer>
    </StyledQuestion>
  );
};

export default Question;
