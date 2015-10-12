'use strict' //ES5

console.log('HELLO'); //console !

/////////////////////// VAR  /////////////////////////////////

var foo = 'bar';


//////////////////////////////////


/////////////////////// TYPES  ///////////////////////////////

/* Comment */

types = [ '', 0, 0==0, null, undefined, {}, function(){} ]  //;

for(var i=0;i<types.length;i++ )
	console.log(typeof types[i])
	
var types = 'types'

/* Number */
var x = 1;
x = 1.1;
x = NaN;
x = Infinity;
x = -Infinity; 


/* String */
var str = 'hello world';
str = "hello world - 2";

var checked = true; 
checked = false;

var age = null;

var y;
y = 123;
y = undefined;


var user = { name: "Вася" };
	
////////////////////////Operators////////////////////////////////
x = 2;
y = 1;
var z = x + y;

// =,-,/,*,+=,-=,*=,/=,++,--,%, &, |,^,~,<<,>>,>>>

z = '5' + z; 

z = + '5' + + z;


z = (z, z + 1);

// ==,===,!=,!==,>,>=,<,<=

z = 'abc' < 'd';
z = '01' == 1;
z = '01' === 1;

z = null == undefined;

z = null == null;
z = null > 0;
z = null == 0;
z = null >= 0;

z = undefined == undefined;
z = undefined > 0;
z = undefined < 0;
z = undefined == 0;

z = NaN == NaN;
z = 0 == NaN;
z = null == NaN;
z = undefined == NaN;
z = isNaN(NaN);
z = NaN !== NaN;

z = NaN + 1 == NaN;
z = Infinity + 1 == Infinity;
z = 1 / 0 == Infinity;

z = isFinite(NaN) || isFinite(Infinity);
z = isFinite(1);

z = 0.1 + 0.2 == 0.3
console.log(0.1 + 0.2);


///////////////////////////////////////////////////////////////

z = NaN == false;         
z = null == false;
z = undefined == false;
z = 0 == false;
z = '' == false;

if(NaN || null || undefined || 0 || ''){
	console.log('NaN || null || undefined || 0 || "" == true');
	
}

z = true && 1 && 'true' && !0 ? 1 : 0;

//switch

///////////////////////////////////////////////////////////////
z = +undefined;
z = +null;
z = +true;
z = +false;
z = Number(false);
z = parseInt('23px');
z = parseFloat('34.5px');

z = '' + 1;
z = String(1);

z = !!1;
z = Boolean(1);

///////////////////////////////////////////////////////////////

for(var i = 0; i < 2 ;i++){
	console.log('for:' + i);
}

while(i!=0){
	console.log('while:' + i);
	i--;
}

i = 2;

do{
	console.log('do-while:' + i);
	i--;
}while(i!=0);

//continue, break;
//////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////
////////////////////String/////////////////////////////////////

z = 'qwe'.length;
z = z[1];
 
if(~('qwe'.indexOf('q'))){
	console.log('qwe contain q')
}
//substr, substring, slice.

////////////////////OBJ////////////////////////////////////
var person = {};
person = new Object();
person = {bar:'foo'};

person.name = 'JS-programmer';
person.age = 10;

delete person.age;
if('name' in person){
	console.log('person has name');
	
}

var surname = person.surname;
person['surname'] = 'from-iu7';

for(var prop in person){
	console.log(person[prop]);
	
}
///////////////////Array/////////////////////////////////////

var array = [1,2];
array[5] = 4;
z = array.length;

//pop,push,shift,unshift
//split, join

array.splice(0,1,'a','b','c');
z = array.slice(0,2);

//sort
//filter,map,every,some

var result = array.reduce(function(sum, current) {
  return sum + current;
}, 0);

/////////////////////Func/////////////////////////////////
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

////////////////////////This////////////////////////////////////

person.hello = function(){
	return 'hello, i`m' + this.name; 
	
}
console.log(person.hello());

//toString, valueOf
//////////////////////////Ctor////////////////////////////////////
function Person(name, age){
	var msg = 'hello, i`m ';
	this.name = name;
	this.age = age;
	this.hello = function(){
		return msg + this.name; 
	}
}

var p = new Person('Vasya', 20);
console.log(p.hello());

//return



Object.defineProperty(p, "description", {

  get: function() {
    return this.name + ' ' + this.age;
  },

  set: function(value) {
      var split = value.split(' ');
      this.name = split[0];
      this.age = +split[1];
    }
});

//через имя свойства


Person.desc = 'this is person obj';

console.log(p.hello.call({name:'A'}));

//apply
//bind

p.print = function(){
	console.log(this.hello());	
}
setTimeout(p.hello, 1000);
////////////////////////TRY///////////////////////////////////
try{
	lalalala;
}
catch(e){
	console.log(e);
}
finally{	
	console.log('finally');
}


try{
	throw new Error('ERROR');
}
catch(e){
	console.log(e);
}

/////////////////////OOP//////////////////////////////////////////
//Functional style

function Animal(speed) {
	var self = this;
	var name = 'animal';
	this.speed = speed;

	var runing = function(){
		return 'run with speed = ' + self.speed;		
	}
	
	this.run = function(){
		console.log(runing());
		
	}	
}

function Cat(may, speed){
	Animal.call(this, speed);
	
	this.sayMay = function(){
		console.log('MAY: ' + may);
		
	}
	
	//run
}

var cat = new Cat('may-may-maaaayyyy', 5);
cat.run();
cat.sayMay();

///////////////////////////Prototype/////////////////////////////////

var animal = {run:true}
var dog = {may:false}

dog.__proto__ = animal;

console.log(dog.run);

//hasOwnProperty

var obj = Object.create(null);

function Dog(gav){
	this.sayGav = function(){
		console.log('Gav: ' + gav);
	}
}
Dog.prototype = new Animal(10);
Dog.prototype.constructor = Dog;

(new Dog('gav')).sayGav();
(new Dog('gav')).run();

function ProtoAnimal(speed) {
	var self = this;
	var name = 'animal';
	this.speed = speed;
	this._runing = function(){
		return 'run with speed = ' + self.speed;		
	}
}
ProtoAnimal.prototype.run = function(){
	console.log(this._runing());		
}	

function ProtoCat(may, speed){
	ProtoAnimal.apply(this, [speed]);
	this._may = may;
}
ProtoCat.prototype = Object.create(ProtoAnimal.prototype);
ProtoCat.prototype.constructor = Cat;
ProtoCat.prototype.sayMay = function(){
	console.log('MAY: ' + this._may);		
}

cat = new ProtoCat('maaaaaay may may may maaaay',4);
cat.run();
cat.sayMay();

ProtoCat.prototype.run = function(){
	var base = ProtoAnimal.prototype;
	console.log('i don`t want it ... :(');
	base.run.apply(this);	
}

cat.run();

var catIsAnimal = cat instanceof ProtoCat && cat instanceof ProtoAnimal;
//mixin

///////////////////////////////////////////////////////////////

z = Math.abs(-1);
z = Math.floor(1.2);
z = Math.ceil(1.2);
z = Math.round(1.2);

z = new Date();
////////////////////// JSON ////////////////////////////////////
var a = {b:'hello', c: 123};
var json = JSON.stringify(a);
console.log(json);
var b = JSON.parse(json);
console.log(b.b);

////////////////////////////////////////////////////////////////


for(;;){}