import filereader from '../utils/filereader.js';
import { start } from 'repl';

const inputArray = filereader('input.txt').map(Number);

const solve = () => {
    inputArray.sort((a, b) => a - b);

    let sum, startPointer = 0;
    let endPointer = inputArray.length - 1;
    // part 1 - O(n * log(n)) time
    while (startPointer < endPointer) {
        sum = inputArray[startPointer] + inputArray[endPointer];
        if (sum === 2020) {
            console.log('part 1 sol', inputArray[startPointer]*inputArray[endPointer]);
            break;
        } else if (sum > 2020) {
            endPointer--;
        } else {
            startPointer++;
        }
    }

    sum = 0, startPointer = 0;
    endPointer = inputArray.length - 1;
    // part 2 - O(n^2*log(n)) time
    while (startPointer < endPointer && sum !== 2020) {
        for (let thirdPointer = startPointer + 1; thirdPointer < endPointer; thirdPointer++) {
            sum = inputArray[startPointer] + inputArray[endPointer] + inputArray[thirdPointer];
            if (sum === 2020) {
                console.log('part 2 sol', inputArray[startPointer]*inputArray[endPointer]*inputArray[thirdPointer] );
                break;
            }
        }
        if (sum > 2020) {
            endPointer--;
        } else {
            startPointer++;
        }
    }
}

solve();