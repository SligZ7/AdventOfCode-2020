import filereader from '../utils/filereader.js';

const inputArray = filereader('input.txt').map(Number);
/*
    PART 1
    1. Brute Force O(n^2) Time
    2. Sort then use pointers moving at both ends until 2020. O(nlogn) Time
    3. Use a hash to store values, subtract 2020 by value and see if in hash. O(n) Time but also O(n) Space.

    PART 2
    1. Brute Force O(n^3) Time
    2. Sort then use pointers moving at both ends and a moving mid, until 2020 while having . O(n^2) Time
*/
const solve = () => {
    //Sort 
    const sorted = inputArray.sort(function(a, b) {
        return a - b
    });

    //Part 1
    var start = 0;
    var end = sorted.length - 1;
    
    while(sorted[start] + sorted[end] !== 2020 && start < end){
        if(sorted[start] + sorted[end] > 2020){
            end--;
        } else{
            start++;
        }
    }
    var total_1 = sorted[start] * sorted[end];
    console.log(total_1);

    //Part 2
    start = 0;
    end = sorted.length - 1;

    while(start < end){
        for(var i = start; i < end; i++){
            if(sorted[start] + sorted[i] + sorted[end] === 2020){
                console.log(sorted[start] * sorted[i] * sorted[end])
                break;
            }
        }
        if(sorted[start] + sorted[end] > 2020/2){
            end--;
        } else{
            start++;
        }
    }
}

solve();