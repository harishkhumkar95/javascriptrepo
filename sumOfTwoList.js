function sumOfMultiples(listOfInteger1, listOfInteger2) {
    let sum = 0;

    for (let num of listOfInteger2) {
        for (let multiple of listOfInteger1) {
            if (num % multiple === 0) {
                sum += num;
                break; // No need to check other multiples for this num
            }
        }
    }

    return sum;
}


const listOfInteger1 = [2, 3,6,8,5]; 
const listOfInteger2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const result = sumOfMultiples(listOfInteger1, listOfInteger2);
console.log(`The sum of all multiples: ${result}`);
alert('sum=='+result);
