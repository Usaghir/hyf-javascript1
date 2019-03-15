// Task 8.checkSameType

var a =10; //8.1
var b= true; 
var c= 'String';
var d = [1,2,3];
console.log(a); //8.2
console.log(b);
console.log(c);
console.log(d);
console.log("The variable I have are a as integer, b boolean, c string and d array"); //8.3
console.log(typeof a); //8.4
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

////8.5 8.6
if (typeof(a)==typeof(b)){
    console.log("both" +a+ "and" +b+" are of same type");}
else {
    console.log("both" +a+ "and" +b+" are not of same type");}

if (typeof(a)==typeof(c)){
    console.log("both" +a+ "and" +c+" are of same type");}
else {
    console.log("both" +a+ "and" +c+" are not of same type");}

if (typeof(a)==typeof(d)){
    console.log("both" +a+ "and" +d+" are of same type");}
else {console.log("both" +a+ "and" +d+" are not of same type");}  

if (typeof(b)==typeof(c)){
    console.log("both" +b+ "and" +c+" are of same type");}
else {console.log("both" +b+ "and" +c+" are not of same type");} 

if (typeof(b)==typeof(d)){
    console.log("both" +b+ "and" +d+" are of same type");}
else {console.log("both" +b+ "and" +d+" are not of same type");} 
""
if (typeof(c)==typeof(d)){
    console.log("both" +c+ "and" +d+" are of same type");}
else {console.log("both" +c+ "and" +d+" are not of same type");}   







