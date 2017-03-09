function Palindrome(str) { 
  var str1 = "";
  for (var i =0; i <= str.length-1; i++){
    if(str[i] != " "){
      str1 = str1 + str[i];
    }
  }
  //console.log(str1);
 // var str1 = str;
 var str2 = "";
  for(var j = str1.length-1; j>=0; j--){
    str2 = str2 + str1[j];
  }
  //return str2;
  //console.log(str1);
  //console.log(str2);
  if (str1 == str2){
    return true;
  }else{
    return false;
  }
}
Palindrome("akak ab");