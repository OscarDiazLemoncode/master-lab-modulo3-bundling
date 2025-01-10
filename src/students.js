import myFuncGetAvg from './average-service'

const scores = [90, 685, 150, 199, 194, 30];
const averageScore = myFuncGetAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);