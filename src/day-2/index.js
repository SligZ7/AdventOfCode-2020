import filereader from '../utils/filereader.js';

const inputArray = filereader('input.txt').map((str) => (str.split(' ')));

/*
 * Part 1
 * Brute force check every line. Should be O(n*s)
 *
 * Part 2
 * Check just the positions indicated. Still should be O(n*s) because of parsing each line
 */ 
const solve = () => {
    var valids1 = 0;
    var valids2 = 0;
    inputArray.forEach((line) =>
    {
        //Parse Numbers
        const minMax = line[0].split('-').map(Number);

        //Parse Letter
        const letter = line[1][0];

        //Check if valid
        //Part 1
        var letterCount = 0;
        for(var i = 0; i < line[2].length; i++){
            if(line[2][i] === letter){
                letterCount++;
            }
        }

        if(letterCount >= minMax[0] && letterCount <= minMax[1]) valids1++;

        //Part 2
        const pos1 = line[2][minMax[0]-1] === letter;
        const pos2 = line[2][minMax[1]-1] === letter;
        if(pos1 ? !pos2 : pos2){
            valids2++;
        }
    })

    console.log(valids1);
    console.log(valids2);
}

solve();
