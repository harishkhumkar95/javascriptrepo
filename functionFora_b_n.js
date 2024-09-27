

function sumOfMultiples(a, b, n) {
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            totalSum += i;
        }
    }
    return totalSum;
}

let a = 3;
let b = 5;
let n = 1000;

let result = sumOfMultiples(a, b, n);
console.log(result);  // Output: 233168