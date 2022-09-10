import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { choices: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum Category {
  GENERAL_KNOWLEDGE = 9,
  MYTHOLOGY = 20,
  SPORTS = 21,
}

export const fetchQuizQuestions = async (
  amount: number,
  category: Category,
  difficulty?: Difficulty
) => {
  const endpoint = difficulty
    ? `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=${category}`
    : `https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}`;

  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    choices: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
