import './mystyles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AverageComponent } from './average-component';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hola mundo!</h1>
    <AverageComponent />
  </div>
);

/* import './mystyles.scss';
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
document.getElementById("imgContainer").appendChild(img); */
