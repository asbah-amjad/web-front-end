
interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (target: number, hours: number[]): Result => {

    let totalHours: number = 0;
    let nonTrainingDays: number = 0;
    let success: boolean = false;
    let rating: number = 0;
    let ratingDescription: string = '';
    const totalPeriod = hours.length;
    hours.forEach(value => {

        if (isNaN(value)) {
            throw new Error('malformatted parameters');
        }

        totalHours = totalHours + value;
        if (value === 0) {
            nonTrainingDays++;
        }
    });
    const average = totalHours / totalPeriod;

    if ((average - target) <= -1) {
        success = false;
        rating = 1;
        ratingDescription = 'More training needed';
    }
    else if ((average - target) < 0) {
        success = false;
        rating = 2;
        ratingDescription = 'Not too bad but could be better';
    }
    else if ((average - target) >= 0) {
        success = true;
        rating = 3;
        ratingDescription = 'Good Job';
    }

    let resultSummary: Result = {
        periodLength: totalPeriod,
        trainingDays: totalPeriod - nonTrainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };

    return resultSummary;
};

export { calculateExercises };





