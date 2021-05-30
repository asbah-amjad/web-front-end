
import express from 'express';
import { calculateBmi } from './bmi-calculator';

const app = express();

app.get('/bmi', (req, res) => {

    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if(!height || !weight ) {
        res.json({'error': 'malformatted parameters'})
    }
    if(!isNaN(height) && !isNaN(weight)){
        const bmi = calculateBmi(height, weight);
        res.json({weight: weight,
            height: height,
            bmi: bmi});
    }
    else{
        res.json({'error': 'malformatted parameters'})
    }   
    
});
  
const PORT = 3003;
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});