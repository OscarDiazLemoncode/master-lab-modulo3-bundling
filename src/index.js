import './mystyles.scss';
import logoImg from "./content/logo_1.png"
import myFuncGetAvg from './average-service.js'

const userName = "Oscar lemoncode";
const greet = `${userName} ${Math.random()}`;
console.log(greet);

const scores = [90, 685, 150, 199, 194, 30];
const averageScore = myFuncGetAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);