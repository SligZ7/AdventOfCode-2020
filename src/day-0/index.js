import filereader from '../utils/filereader.js';
import { constants } from 'fs';

const inputArray = filereader('input.txt');

// This is the day 1 of the 2019 set. Just doing it to get my environment set up!
const solve = () => {
    // TODO: add your solution here
    let totalSum = 0;
    inputArray.map((num) => {
        totalSum += Math.floor(num / 3) - 2;
    });

    console.log(totalSum);
}

solve();
