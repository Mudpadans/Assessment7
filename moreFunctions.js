const perf = require('execution-time')();

const addToZero = (arr) => {
    let numSet = new Set()

    for (let i = 0; i < arr.length; i++) {
        if (numSet.has(-arr[i])) {
            return true;
        }
        numSet.add(arr[i])
    }
    return false;
}

perf.start();
addToZero([1, 2, 3, -2]);
let resultsZero = perf.stop();

// console.log("addToZero", resultsZero.preciseWords)

// 119.376 μs, O(n)

const uniqueChars = (str) => {
    let strSet = new Set(str)
    return strSet.size === str.length
}

perf.start();
uniqueChars("Monday");
let resultsChars = perf.stop();

// console.log("uniqueChars", resultsChars.preciseWords);

// 86.698 μs, O(n)

const pangram = (str) => {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz')
    const strSet = new Set(str.toLowerCase().replace(/[^a-z]/g, ''))
    
    for (let char of alphabet) {
        if (!strSet.has(char)) {
            return false;
        }
    }
    return true;
}

perf.start();
pangram('The quick brown fox jumps over the lazy dog!');
let resultsPangram = perf.stop();

console.log('pangram', resultsPangram.preciseWords);

// 448.342 μs, O(n)

const longestWord = (["hi", "hello"]) => {
    
}