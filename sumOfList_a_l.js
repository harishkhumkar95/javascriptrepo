
// <!-- c.
// Create a function which takes parameters a,l
// a is a list of integers
// l is a list of integers
// find the sum of all the multiples of elements of a in l
// */ -->


function calSumOfMul() {
    const a = [2, 3]; 
    const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    let sum = 0;

    alert('working');
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (num % a[j] === 0) {
                sum += num; 
                break; 
            }
        }
    }
    

    console.log(`Sum of multiples: ${sum}`);
    alert('sum of multiple:'+ sum)
    
}
window.onload=calSumOfMul;


