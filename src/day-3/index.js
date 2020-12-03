import filereader from '../utils/filereader.js';

const inputArray = filereader('input.txt');

const solve = () => {
    //Part 1
    console.log(helper(3,1));

    //Part 2
    console.log(helper(1,1) * helper(3,1) * helper(5,1) * helper(7,1) * helper(1,2));
}

// O(n)
const helper = (xIncrement, yIncrement) => {
    const xLen = inputArray[0].length; //Should all be the same length.
    const yLen = inputArray.length;
    const treeChar = '#';
    var x = 0;
    var y = 0;
    var trees = 0;

    while(y < yLen){
        if(inputArray[y][x % xLen] === treeChar) trees++;
        x+=xIncrement;
        y+=yIncrement;
    }
    return trees;
}

solve();




