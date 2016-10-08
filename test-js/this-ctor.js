////////////////////////This////////////////////////////////////
var person = {name:'js-programmer'};

person.hello = function(){
	return 'hello, i`m ' + this.name;  
}
console.log(person.hello());
var f = person.hello;
console.log(f());
var bindedF = f.bind({name:'123'});
bindedF();

f.apply({name:'4'},[1,2,3]);
f.call({name:'5'}, 1,2,3);

//toString, valueOf
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
