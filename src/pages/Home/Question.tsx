import React, { useState } from 'react';
import styled from 'styled-components';
import { Difficulty } from '../../API';
import { Level, questionObject, userAnswerObject } from './Discover';

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledQuestionContainer = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 75%;
  padding: 2em;
  box-shadow: -1px 9px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  margin: 1em 0;

  ${({ bgColor }) => `background: ${bgColor};  border: solid 1px ${bgColor};`}
`;

const StyledChoice = styled.p<{ isActive: boolean }>`
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background: #ffe6ff;
  }

  ${({ isActive }) => isActive && 'background: #ffccff;'}
`;

const Question: React.FC<{
  difficulty: Difficulty;
  questions: Level;
  onAnswerSelect: (diff: string, ans: number) => void;
}> = ({ difficulty, questions, onAnswerSelect }) => {
  const [activeChoice, setActiveChoice] = useState(1);
  const getQuestion = (difficulty: Difficulty): questionObject | void => {
    if (questions) return questions[difficulty];
  };

  const cardColorMap = {
    easy: '#99ffcc',
    medium: '#FFF4A3',
    hard: '#ff6666',
  };

  const question = getQuestion(difficulty);

  const onChoiceClick = (index: number) => setActiveChoice(index);

  return (
    <StyledQuestion>
      <StyledQuestionContainer bgColor={cardColorMap[difficulty]}>
        <h1>{difficulty.toUpperCase()}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: question?.question || '' }}></h2>
        {question?.choices.map((choice, index) => (
          <StyledChoice
            dangerouslySetInnerHTML={{ __html: choice || '' }}
            isActive={index === activeChoice}
            onClick={() => onAnswerSelect(difficulty, index)}
          />
        ))}
      </StyledQuestionContainer>
    </StyledQuestion>
  );
};

export default Question;
