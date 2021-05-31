

import { calculateExercises } from './exercise-calculator';

const target: number = Number(process.argv[2]);
const hours1: number = Number(process.argv[3]);
const hours2: number = Number(process.argv[4]);
const hours3: number = Number(process.argv[5]);
const hours4: number = Number(process.argv[6]);
const hours5: number = Number(process.argv[7]);
const hours6: number = Number(process.argv[8]);
const hours7: number = Number(process.argv[9]);

let hours: number[] = [hours1, hours2, hours3, hours4, hours5, hours6, hours7];

console.log(calculateExercises(target, hours));

/*

>>> test case 1:

npm start cli  2 3 0 2 4.5 0 3 1


{
  periodLength: 7,
  trainingDays: 5,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.9285714285714286
}

>>> test case 2:

npm start cli 2 1 0 2 4.5 0 3 1 0 4

{ periodLength: 9,
  trainingDays: 6,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.7222222222222223
}

*/
