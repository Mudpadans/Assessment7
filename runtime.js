const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


/* 
Results Paragraphs:
The test here was to see if the push() method (the append function) or the unshift() method (the insert function) is faster. From the results the insert function took longer with larger arrays, but it was faster than the append function with smaller arrays. However the differences with the smaller arrays were negligible. 
The reason for this has to do with memory, it may seem very similar but the major difference is that unshift is changing the position of every array item. The item that was first goes from '0' to '1' and then on and on through each item in the array, which makes it take longer. All push is give the new item the next place in the array, which gives it a time complexity of O(1) and the unshift a time complexity of O(n). the differences in the smaller array may have had to do with browser performance.
*/