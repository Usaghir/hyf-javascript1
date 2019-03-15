//Task 1.helloWorld
let myString="hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length); // for length 
let updatedString=myString.replace(/,/g, " ");
console.log(updatedString); // new string after replacing the , with spaces. 