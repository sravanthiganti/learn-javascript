/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here
function average(...numbers){

    let sum=0;
    let noOfArgs = numbers.length;
    
    for(number of numbers){
        sum += number;
     }
    
    if (noOfArgs !=0){
        avg=sum/noOfArgs;
    }else{
        avg=0;
    }
    return  avg;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());