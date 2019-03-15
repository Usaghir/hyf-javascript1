//Task 10.compareMultiple.js

var anArray = ['string',10, 1.1, false];
console.log(anArray);
console.log('array can store multiple datatypes');
var a = 6/0;
var b = 10/0;
if(typeof(a)===typeof(b)){
    console.log('yes we can compare infinites as these are of same type.')
}