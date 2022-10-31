#!/usr/bin/env node

import {
  greeting,
  createDigit,
  askQuestion,
  getCorrectAnswer,
  getGameResult
} from '../games/brain-calc.js';

const gameController = () => {
  const name = greeting();
  let gamePoint = 0;
  while (gamePoint < 3) {
    const gameDigit = createDigit();
    const userAnswer = askQuestion(gameDigit);
    const correctAnswer = getCorrectAnswer(gameDigit);
    const gameResult = getGameResult(userAnswer, correctAnswer);
    if (gameResult === 'win') {
      console.log('Correct!')
      gamePoint += 1;
    } else {
      const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`;
      console.log(result);
      return result;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};

gameController();
