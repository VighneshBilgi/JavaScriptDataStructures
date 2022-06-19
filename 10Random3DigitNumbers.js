console.log('Generating 10 Random 3 digit numbers...');

let numArray = [];
for (var i = 0; i<10; i++){
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
} 

console.log('Array of 10 Random 3 Digit Numbers are: ',numArray);

var max= numArray[0];
for (var i = 0; i<10; i++){

    if(max<numArray[i]){
        max = numArray[i];
    }

} 

// console.log('Largest value in array is :',max);

var min= numArray[0];
for (var i = 0; i<10; i++){

    if(min>numArray[i]){
         min = numArray[i];
    }

} 

// console.log('Smallest value in array is :',min);

var maxSecond = numArray[0];
for (var i = 0; i<10; i++){

    if(numArray[i]!=max){
        if(maxSecond<numArray[i]){
            maxSecond = numArray[i];
        }
    }

} 

console.log('Second Largest value in array is :',maxSecond);

var minSecond = numArray[0];
for (var i = 0; i<10; i++){

    if(numArray[i]!=min){
        if(minSecond>numArray[i]){
            minSecond = numArray[i];
        }
    }

} 

console.log('Second Smallest value in array is :',minSecond);