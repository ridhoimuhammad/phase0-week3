function FirstReverse(str) { 

  // code goes here 
   var stri = "";
    for (var i = str.length - 1; i >= 0; i--) {
        stri+= str[i];
    }
  return stri; 
         
}
   
// keep this function call here 
FirstReverse(readline());