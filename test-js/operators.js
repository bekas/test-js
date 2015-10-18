z = NaN == false;         
z = null == false;
z = undefined == false;
z = 0 == false;
z = '' == false;

if(NaN || null || undefined || 0 || ''){
	console.log('NaN || null || undefined || 0 || "" == true');
	
}

var qwerty = new Boolean(false);
if(qwerty){
	
}

z = true && 1 && 'true' && !0 ? 1 : 0;

//switch

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