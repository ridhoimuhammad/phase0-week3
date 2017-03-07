function numberSum(num) {
  if(num == 1) {
    return 1;
  }
  else {
    return num * numberSum(num - 1);
  }
}
console.log(numberSum(5)); // 5 x 4 x 3 x 2 x 1 = 15

function factorial2(num1,num2){
 if(num1 <= 1){
   return 1;
 }else {
   var total = 1;
   for(num1; num1 > 0 ; num1 -= num2){

       total = total * num1;
   }
   return total;
 }
}

console.log(factorial2(12,5));

//thnx pak fadil :D :D