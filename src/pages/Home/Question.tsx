import React from 'react';
import styled from 'styled-components';
import { Difficulty } from '../../API';
import { Level, questionObject } from './Discover';

const Question: React.FC<{
  difficulty: Difficulty;
  questions: Level;
}> = ({ difficulty, questions }) => {
  const getQuestion = (difficulty: Difficulty): questionObject | void => {
    if (questions) return questions[difficulty];
  };

  const question = getQuestion(difficulty);

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: question?.question || '' }}></h1>
      {question?.choices.map((choice) => (
        <p>{choice}</p>
      ))}
    </div>
  );
};

export default Question;
