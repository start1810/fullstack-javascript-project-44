import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const createDigit = () => {
  const generalMember = Math.floor(Math.random() * 9) + 1;
  const progressionLength = 5 + Math.floor(Math.random() * 5);
  const firstElem = Math.floor(Math.random() * 30);

  const iter = (counter, acc) => {
    if (counter === progressionLength) {
      return acc;
    }
    acc.push(acc[acc.length - 1] + generalMember);
    return iter(counter + 1, acc);
  };
  const arithmeticProgression = iter(0, [firstElem]);
  const randomIndex = Math.floor(Math.random() * (arithmeticProgression.length - 1));
  const trueAnswer = arithmeticProgression[randomIndex];
  arithmeticProgression[randomIndex] = '..';
  return { arithmeticProgression, trueAnswer };
};

export const askQuestion = (gameDigit) => {
  const progression = gameDigit['arithmeticProgression'];

  const iter = (counter, acc) => {
    if (counter === progression.length) {
      return acc;
    }
    const newAcc = `${acc}${progression[counter]} `;
    return iter(counter + 1, newAcc);
  };
  const progressionString = iter(0, '');

  console.log('What number is missing in the progression?');
  console.log(`Question: ${progressionString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getCorrectAnswer = (gameDigit) => `${gameDigit.trueAnswer}`;

export const getGameResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return 'win';
  }
  return 'lose';
};
