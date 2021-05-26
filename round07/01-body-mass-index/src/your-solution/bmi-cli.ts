
import { calculateBmi } from './bmi-calculator';

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
calculateBmi(height, weight);

