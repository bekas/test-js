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


/////////////////////////////////////////////////////
