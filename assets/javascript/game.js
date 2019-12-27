var wins = 0;
var losses = 0;

var crystalone = Math.floor((Math.random() * 12)+1); //random number between 1-12
var crystaltwo = Math.floor((Math.random() * 12)+1);
var crystalthree = Math.floor((Math.random() * 12)+1);
var crystalfour = Math.floor((Math.random() * 12)+1);
var numbertoget = Math.floor(Math.random() * (121-19)+19); //random number between 19-120, max value has to be one more than the range you want
var yourscore = 0; 

console.log("crystal one = " + crystalone);
console.log("crystal two = " + crystaltwo);
console.log("crystal three = " + crystalthree);
console.log("crystal four = " + crystalfour);
console.log("number to get = " + numbertoget);

