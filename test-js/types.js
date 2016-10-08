'use strict' //ES5
console.log('HELLO'); //console !

/////////////////////// VAR  /////////////////////////////////

var foo = 'bar';
var x;
x = 'asd';
x = 123;
x = true;
x = {};


/////////////////////// TYPES  ///////////////////////////////

/* Comment */

var types = ['', 0, 0 == 0, null, undefined, {}, function(){} ]  //;

for(var i=0; i<types.length; i = i + 1 )
	console.log(typeof types[i])
	
var types = 'types'

/* Number */
var x = 1;
x = 1.1;
x = NaN;
x = 0/0;
x = Infinity;
x = -Infinity; 

/* String */
var str = 'hello world';
str = "hello world - 2";

/* Boolean */
var checked = true; 
checked = false;

/* null */
var age = null;

/* Undefined */
var y;
y = 123;
y = undefined;

/* Object */
var user = {
  name: "Вася",
  getName: function(){    
    return this.name;
  } 
};
        
user.getName();
   
user.getName = function() { return "NO NAME" };
