const fs = require('fs');
const pathDB = "db.txt"

function getArrayOfNumbers(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const numbers = data.split('\n').map((num) => parseInt(num));

    if (!numbers.length) return console.log('Numbers not found');

    return numbers.filter((num) => !isNaN(num));
}

/* Task 1: calculate max number */
function findMax(numbers) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i]
        }
    }
    return maxNumber;
}

/* Task 2: calculate min number */
function findMin(numbers) {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i]
        }
    }
    return minNumber;
}

/* Task 3: calculate median */
function findMedian(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const indexMiddleNumber = Math.floor(sortedNumbers.length / 2);
    const indexPrevNumber = indexMiddleNumber - 1;

    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[indexMiddleNumber] + sortedNumbers[indexPrevNumber]) / 2;
    } else {
        return sortedNumbers[indexMiddleNumber];
    }
}

/* Task 4: calculate arithmetic mean */
function findArithmeticMean(numbers) {
    const sum = numbers.reduce((acc, value) => acc + value, 0);
    return sum / numbers.length;
}

/* Task 5: calculate increasing sequence */
function findLargestIncreasingSequence(numbers) {
    let largestIncreasingSequence = []
    let currentSequence = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > currentSequence[currentSequence.length - 1]) {
            currentSequence.push(numbers[i])
            if (currentSequence.length > largestIncreasingSequence.length) {
                largestIncreasingSequence = [...currentSequence]
            }
        } else {
            currentSequence = [numbers[i]]
        }
    }
    return largestIncreasingSequence
}

/* Task 6: calculate decreasing sequence */
function findLargeDecreasingSequence(numbers) {
    let largestDecreasingSequence = []
    let currentSequence = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < currentSequence[currentSequence.length - 1]) {
            currentSequence.push(numbers[i])
            if (currentSequence.length > largestDecreasingSequence.length) {
                largestDecreasingSequence = [...currentSequence]
            }
        } else {
            currentSequence = [numbers[i]]
        }
    }
    return largestDecreasingSequence
}

// Start "npm node index.js"
console.log('START TEST');
const start = Date.now();

const numbers = getArrayOfNumbers(pathDB);

const median = findMedian(numbers);
console.log('🚀 ~ median:', median);

const maxNumber = findMax(numbers);
console.log('🚀 ~ maxNumber:', maxNumber);

const minNumber = findMin(numbers);
console.log('🚀 ~ minNumber:', minNumber);

const arithmeticMean = findArithmeticMean(numbers)
console.log('🚀 ~ arithmeticMean:', arithmeticMean);

const largestIncreasingSequence = findLargestIncreasingSequence(numbers)
console.log('🚀 ~ largestIncreasingSequence:', largestIncreasingSequence);

const largeDecreasingSequence = findLargeDecreasingSequence(numbers)
console.log('🚀 ~ largeDecreasingSequence:', largeDecreasingSequence);

const end = Date.now();

console.log('END TEST');
console.log(`Time for all calculations: ${end - start} мс`);
