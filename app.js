/**
 * Higer order function 
 * - function can passed an argument
 * - function can be return form another function
 *  */

/**
 * Hidden concepts in javascripts
 * - scope 
 * - closure
 * - Function Context
 * - Hostaing 
 *  */

function genarateTwoRandomNumbers(Max, callback) {
    const random1 = Math.floor(Math.random() * Max)
    const random2 = Math.floor(Math.random() * Max)
    const result = callback(random1, random2);
    return result
}

const sum = genarateTwoRandomNumbers(100, (num1, num2) => {
    return num1 + num2;
})

const multiply = genarateTwoRandomNumbers(100, (random1, random2) => random1 * random2);

console.log(sum, 'sum');
console.log(multiply, 'multiply');

// function randomSum(Max) {
//     const { random1, random2 } = genarateTwoRandomNumbers(20)
//     return random1 + random2;
// }
// function randomSub(Max) {
//     const { random1, random2 } = genarateTwoRandomNumbers(20)
//     return random1 + random2;
// }
