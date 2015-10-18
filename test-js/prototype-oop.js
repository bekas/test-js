
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