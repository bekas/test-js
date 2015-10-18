////////////////////String/////////////////////////////////////

z = 'qwe'.length;
z = z[1];
 
if(~('qwe'.indexOf('q'))){
	console.log('qwe contain q')
}
//substr, substring, slice.


////////////////////Math////////////////////////////////////

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