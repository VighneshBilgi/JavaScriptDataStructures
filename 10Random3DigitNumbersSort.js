console.log('Generating 10 Random 3 digit numbers...');

let numArray = [];
for (var i = 0; i<10; i++){
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
} 

console.log('Array of 10 Random 3 Digit Numbers are: ',numArray);
let numArraySorted = numArray.sort();
console.log('Sorted Array of 10 Random 3 Digit Numbers are: ',numArraySorted);

console.log('Second Largest value in array is :',numArraySorted[numArraySorted.length-2]);
console.log('Second Smallest value in array is :',numArraySorted[1]);