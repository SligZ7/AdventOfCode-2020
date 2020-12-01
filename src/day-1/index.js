import filereader from '../utils/filereader.js';
import { start } from 'repl';

const inputArray = filereader('input.txt').map(Number);

const solve = () => {
    let sum, startPointer = 0;
    let endPointer = inputArray.length - 1;
    inputArray.sort((a, b) => a - b);

    while (startPointer < endPointer && sum !== 2020) {
        for (let thirdPointer = startPointer + 1; thirdPointer < endPointer; thirdPointer++) {
            sum = inputArray[startPointer] + inputArray[endPointer] + inputArray[thirdPointer];
            if (sum === 2020) {
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