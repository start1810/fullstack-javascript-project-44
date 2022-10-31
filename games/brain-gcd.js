import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const createDigit = () => {
  const gameDigits = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];
  return gameDigits;
};

export const askQuestion = (gameDigit) => {
  console.log('Find the greatest common divisor of given numbers');
  console.log(`Question: ${gameDigit[0]} ${gameDigit[1]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getCorrectAnswer = (gameDigit) => {
  if (gameDigit[1] === 0) {
    return gameDigit[0];
  }
  return `${getCorrectAnswer([gameDigit[1], gameDigit[0] % gameDigit[1]])}`;
};

export const getGameResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return 'win';
  }
  return 'lose';
};
