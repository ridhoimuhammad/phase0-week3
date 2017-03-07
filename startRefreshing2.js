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