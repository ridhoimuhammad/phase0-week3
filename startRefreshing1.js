////////////////////
// startRefreshing1.js
///////////////////////////

function satu(x){
if(x == 1) {
    return 1;
  }
  else {
    return x * satu(x - 1);
  }
}
console.log(satu(5));

function dua(x,y){
  if(x <= 1){
    return 1 ;
  }else {
     for(i; i > 0 ;  i-= y){
 var total = total * i;
   }
   return total;

}
console.log(dua(12,5))