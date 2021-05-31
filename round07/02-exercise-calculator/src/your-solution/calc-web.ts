
import express from 'express';
import { calculateExercises } from './exercise-calculator';

const app = express();
app.use(express.json());

app.post('/calc', (req, res) => {
  let hours = req.body.daily_exercises;
  let target = req.body.target;
  const result = calculateExercises(target, hours);
  res.json(result);
});



const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
