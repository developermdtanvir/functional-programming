// this is function statement
function addNumber(number) {

}

// this is anonymous function
const myFunc = function () {

}

// this is arrow function 
const addString = () => {

}


function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;

    }
    return filteredArr;
}

function isOdd(x) {
    return x % 2 !== 0;
}

const data = filterFunction([20, 30, 50, 60, 70, 80, 90, 31, 32, 33, 34, 35,], isOdd)

console.log(data);

const arr = [10, 20, 30];

// pure function 
function add(arr, data) {
    arr.push(data);
}

console.log(add(arr, 20));

// impure function 

function add(data) {
    arr.push(data);
}


//impure function
function log(msg) {
    console.log(msg);
}

