z = NaN == false;         
z = null == false;
z = undefined == false;
z = 0 == false;
z = '' == false;
var a = true;
var b = false;
var c = true;

if(a || (b && c)){
	
}
else{
	
}


if(NaN || null || undefined || 0 || ''){
	console.log('NaN || null || undefined || 0 || "" == true');
	
}

var qwerty = new Boolean(false);
if(qwerty){
	
}

z = true && 1 && 'true' && !0 ? 1 : 0;
var x = 1;
var y;
switch (x)
{
	case 1:
	case 2:
		y = x*x;	
		break;
	case 3:
		y = x;
		break;
}

//switch

///////////////////////////////////////////////////////////////

for(var i = 0; i < 2 ;i++){
	console.log('for:' + i);
}

for(var i = 0; i < 10 && x > 10 ; i++){
	continue;
	x = 123;
	x -=y;	
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