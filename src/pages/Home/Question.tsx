import React, { useState } from 'react';
import styled from 'styled-components';
import { Difficulty } from '../../API';
import { Level, questionObject } from './Discover';
import { breakpoint, color } from '../../constants';

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
  border-radius: 20px;
  margin: 1em 0;

  ${({ bgColor }) => `background: ${bgColor};  border: solid 1px ${bgColor};`}

  > h1 {
    font-size: 1.5rem;
  }

  > h2 {
    font-size: 1.2rem;
  }
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
    background: #ffe6ff;
  }

  ${({ isActive }) => isActive && 'background: #ffccff;'}
  ${({ isSubmitted }) => isSubmitted && 'pointer-events: none;'}



  ${({ isSubmitted, isCorrectChoice, isActive }) =>
    isSubmitted && !isCorrectChoice && isActive && 'background: #ff8c66;'}

  ${({ isSubmitted, isCorrectChoice }) =>
    isSubmitted && isCorrectChoice && 'background: #8cff66;'}
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

  return (
    <StyledQuestion>
      <StyledQuestionContainer bgColor={cardColorMap[difficulty]}>
        <h1>{difficulty.toUpperCase()}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: question?.question || '' }}></h2>
        {question?.choices.map((choice, index) => {
          const isCorrectChoice =
            question.correct_answer === question.choices[index];
          return (
            <StyledChoice
              dangerouslySetInnerHTML={{ __html: choice || '' }}
              isActive={index === activeAnswer}
              onClick={() => onChoiceClick(difficulty, index)}
              isSubmitted={isSubmitted}
              userAnswer={
                question.choices[userAnswer] === question.correct_answer
              }
              isCorrectChoice={isCorrectChoice}
              key={index}
            />
          );
        })}
      </StyledQuestionContainer>
    </StyledQuestion>
  );
};

export default Question;
