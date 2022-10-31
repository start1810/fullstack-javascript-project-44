import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const createDigit = () => {
	const gameDigit = Math.floor(Math.random() * 100) + 1;
	return gameDigit;
};

export const askQuestion = (gameDigit) => {
	console.log('Answer "yes" if given number is prime, otherwise answer "no".');
	console.log(`Question: ${gameDigit}`);
	const userAnswer = readlineSync.question('Your answer: ');
	return userAnswer;
};

export const getCorrectAnswer = (gameDigit) => {
	let index = 2;
	while (index < Math.sqrt(gameDigit)) {
		if ((gameDigit % index) === 0) {
			return 'no';
		}
		index += 1;
	}
	return 'yes';
};

export const getGameResult = (userAnswer, correctAnswer) => {
	if (userAnswer === correctAnswer) {
		return 'win';
	}
	return 'lose';
};