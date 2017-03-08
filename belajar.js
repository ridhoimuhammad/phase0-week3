function hello(arr){
   var arr1 = arr.split('');
  console.log(arr+' '+arr1+' '+arr1.join('/'));
  return arr1.join('/');
  
}
console.log(hello("parel")); // [p,a,r,e,l]
function hello2(str){
  console.log('Hello '+ str);
}
hello2("Budi");