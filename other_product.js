
function OtherProducts(arr1) { 
  
  // code goes here  
  var arrhasilkali = [];
  for(var i=0;i<arr1.length; i++){
    var hasilx = 1;
     for( var j = 0; j<arr1.length; j++){
      
       if (i !==j){
         hasilx=hasilx * arr1[j];
       }
       //console.log(i+' '+j+' '+arr1[i]+' '+arr1[j]+' '+hasilx);
     }
    arrhasilkali.push(hasilx);
  }
  
   return arrhasilkali.join("-");      
}


   
// keep this function call here 
console.log(OtherProducts([3,1,2,6])) ; 