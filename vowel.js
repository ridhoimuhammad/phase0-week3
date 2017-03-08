function VowelCount(str) { 

 var vowel =0;
 for (var i= 0 ; i<str.length; i++){
   if(str[i]== 'o' ||str[i]== 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'u'){
    vowel= vowel + 1;   
   }
   return vowel ;
 }
 
}
   
// keep this function call here 
VowelCount("readline");