////////////////////////This////////////////////////////////////
var person = {name:'js-programmer'};

person.hello = function(){
	return 'hello, i`m ' + this.name; 
	
}
console.log(person.hello());
var f = person.hello;
f();

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

Person.description = 'this is person obj';

console.log(p.hello.call({name:'A'}));
console.log(p.hello.apply({name:'A'}));

//bind

p.print = function(){
	console.log(this.hello());	
}
setTimeout(p.hello, 1000);
