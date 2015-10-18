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