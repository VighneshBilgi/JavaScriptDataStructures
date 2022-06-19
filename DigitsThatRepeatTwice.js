let digits = [];
var count =0;


for(var i=0; i<=100; i++){

   var numString = i.toString();

    if(numString.charAt(0)==numString.charAt(1)){
        count++;
    }

   if(count!=0){
    digits.push(i); 
   }

   count =0;

}

console.log(digits);