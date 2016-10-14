////////////////////////This////////////////////////////////////
var person = {name:'js-programmer'};

person.hello = function(){
	return 'hello, i`m ' + this.name;  
}
console.log(person.hello());
var f = person.hello;
console.log(f());

var bindedF = f.bind({name:'bind'});
bindedF();

f.apply({name:'apply'}, [1, 2, 3]);
f.call({name:'call'}, 1, 2, 3);

//////////////////////////Ctor////////////////////////////////////
function Person(name, age){
  var self = this; 
	var msg = 'hello, i`m ';
	this.name = name;
	this.age = age;
	this.hello = function(){
		return msg + self.name; 
	}
}

var p = new Person('Vasya', 20);
console.log(p.hello());

Object.defineProperty(p, "description", {

  get: function() {
    return 'Name: ' + this.name + ', age: ' + this.age;
  },

  set: function(value) {
      var split = value.split(' ');
      this.name = split[1];
      this.age = +split[3];
    }
});


Person.description = 'Name: Ivan, age: 25';

console.log(p.hello.call({name:'Name-by-call'}));
console.log(p.hello.apply({name:'Name-by-apply'}));


p.print = function(){
	console.log(this.hello());	
}
setTimeout(p.hello, 1000);
