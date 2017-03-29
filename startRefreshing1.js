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
  }else{
    for(; x>y; x--){
     // console.log(x);
     var hasil = x-y*y;
    } return hasil;
  }
}
console.log(dua(12,5))
