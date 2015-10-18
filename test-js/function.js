/////////////////////Function//////////////////////////////

var answer = 0;

// Function Declaration
function sum(x,y){
	x = x || 1;
	y = y || 1;
	
	var s = x + y;
	answer = s;      // :(
	return s;
}

var s = sum(1,2);

console.log(sum());
console.log(sum);

var mySum = sum;

console.log(mySum());
mySum = null;
//console.log(mySum());

// Function Expression
var comp = function(x,y){
	return x*y;
}
console.log(comp(3,4));


function map(array, func){
	for (var i=0;i<array.length;i++){
		array[i] = func(array[i]);
	}
	return array;
}

console.log( map([1,2,3], function(x){return x*x}) );


mySum = new Function('x,y', ' return x+y; ');

z = eval('1 + 2');
console.log(mySum(3,4));

var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
}


function sumN(){
	var s = 0;
	for(var i=0;i<arguments.length;i++){
		s+=arguments[i];
	}
}

function makeCounter() {
  var currentCount = 1;

  return function() { 
    return currentCount++;
  };
}


var counter1 = makeCounter(); 
var counter2 = makeCounter();

////////////////////////Module//////////////////////////////////////
var window = {};

var myModule = 
(function(){
	window.myModule = {myLib: 'LIB'};
	return 	window.myModule;
})();
