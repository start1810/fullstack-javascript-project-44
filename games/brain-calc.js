import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const createDigit = () => {
  const operations = ['+', '-', '*'];
  const gameDigits = {
    firstDigit: Math.floor(Math.random() * 100),
    secondDigit: Math.floor(Math.random() * 100),
    operation: operations[Math.floor(Math.random() * operations.length)],
  };
  return gameDigits;
};

export const askQuestion = (gameDigit) => {
  console.log('What is the result of the expression?');
  console.log(`Question: ${gameDigit.firstDigit} ${gameDigit.operation} ${gameDigit.secondDigit}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getCorrectAnswer = (gameDigit) => {
  var result = 0;
  if (gameDigit.operation === '+') {
    result = gameDigit.firstDigit + gameDigit.secondDigit;
  } else if (gameDigit.operation === '-') {
    result = gameDigit.firstDigit - gameDigit.secondDigit;
  } else if (gameDigit.operation === '*') {
    result = gameDigit.firstDigit * gameDigit.secondDigit;
  }
  return `${result}`;
};

export const getGameResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return 'win';
  }
  return 'lose';
};