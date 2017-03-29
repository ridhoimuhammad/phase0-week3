function ExOh(str) { 

  // code goes here  
  var o = 0,  x = 0;
  for (var i= 0; i<str.length; i++){
      if ( str[i]== 'x'){
          x=x+1;
      }else if (str[i]=='o'){
          o=o+1;
      }
  }
  if( x == o ){
    return true;  
  }else {
      return false;
  }
 
         
}
   
// keep this function call here 
ExOh(readline());