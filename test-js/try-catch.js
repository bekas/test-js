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
