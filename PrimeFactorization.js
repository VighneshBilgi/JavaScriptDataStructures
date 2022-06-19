const prompt = require('prompt-sync')({sigint: true});

console.log('Prime Factorization ?');

const number = prompt('Please enter number :');
console.log('Number entered is :');
console.log(Number(number));

var n = Number(number);
var primeFactors = []; 
divisor = 2;

while(n>2){

    if(n % divisor == 0){

    primeFactors.push(divisor); 
    n= n/ divisor;

    }
    else{

    divisor++;
    
    }     

}

console.log('Prime Factors of number ',n,' are :',primeFactors);
