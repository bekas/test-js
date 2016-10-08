////////////////////////Operators////////////////////////////////

var x = 2; 
if(x == 2)
{
    
}

var y = 1;
var z = x + y;
var c = 0;

c = c + 1;

c += 1;
c++;
c--;
5 % 2;

// =,-,/,*,+, +=,-=,*=,/=,++,--,%, &, |,^,~,<<,>>,>>>

z = '5' + z; 

z = +'5' + +z;

z = (z, z + 1);

// ==,===,!=,!==,>,>=,<,<=

z = 'abc' < 'd';
z = '01' == 1;
z = '01' === 1;

z = null == undefined;

z = null == null;
z = null > 0;
z = null == 0;
z = null >= 0;

z = undefined == undefined;
z = undefined > 0;
z = undefined < 0;
z = undefined == 0;

z = NaN == NaN;
z = 0 == NaN;
z = null == NaN;
z = undefined == NaN;
z = isNaN(NaN);
z = NaN !== NaN;

z = NaN + 1 == NaN;
z = Infinity + 1 == Infinity;
z = 1 / 0 == Infinity;

z = isFinite(NaN) || isFinite(Infinity);
z = isFinite(1);

z = 0.1 + 0.2 == 0.3
console.log(0.1 + 0.2);

///////////////////////////////////////////////////////////////
z = +undefined;
z = +null;
z = +true;
z = +false;
z = Number(false);
z = parseInt('px5q6');
z = parseFloat('34.5px');

z = '' + 1;
z = String(1);

z = !!1;
z = Boolean(1);

///////////////////////////////////////////////////////////////