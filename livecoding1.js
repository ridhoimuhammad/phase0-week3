var Runner1 = {
  name   : "Thomas",
  age    : 28,
  skill   : "Visioning"
}
var Runner2 = {
  name   : "Teresa",
  age    : 35,
  skill   : "Cooking"
}
var Runner3 = {
  name   : "Fry Pan",
  age    : 21,
  skill   : "Crafting"
}
var Runner4 = {
  name   : "Gally",
  age    : 32,
  skill   : "Fighting"
}

 var a = [Runner1,Runner2,Runner3,Runner4]
 for (var i = 0 ;i<a.length; i++) {
 console.log("Name  :" +a[i].name);
 console.log("Age   :" +a[i].age);
 console.log("Skill :" +a[i].skill);
  console.log("------------------");
 }
//var b = [];
for (var i =0; i<a.length; i++){
//b=b+i;
//console.log(b);
if(a[i].age>=20 && a[i].age<=30){

console.log("----->"+a[i].name);

}
}
