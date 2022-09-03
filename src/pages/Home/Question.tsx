import React from 'react';
import styled from 'styled-components';
import { Difficulty } from '../../API';
import { Level, questionObject } from './Discover';

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledQuestionContainer = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  padding: 2em;
  border: solid;
  border-radius: 20px;
  margin: 1em 0;

  ${({ bgColor }) => `background-color: ${bgColor}`}
`;

const Question: React.FC<{
  difficulty: Difficulty;
  questions: Level;
}> = ({ difficulty, questions }) => {
  const getQuestion = (difficulty: Difficulty): questionObject | void => {
    if (questions) return questions[difficulty];
  };

  const cardColorMap = {
    easy: 'green',
    medium: 'yellow',
    hard: 'red',
  };

  const question = getQuestion(difficulty);

  return (
    <StyledQuestion>
      <StyledQuestionContainer bgColor={cardColorMap[difficulty]}>
        <h1>{difficulty.toUpperCase()}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: question?.question || '' }}></h2>
        {question?.choices.map((choice) => (
          <p>{choice}</p>
        ))}
      </StyledQuestionContainer>
    </StyledQuestion>
  );
};

export default Question;
