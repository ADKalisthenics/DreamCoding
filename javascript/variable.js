//1. Use strict
//added in ES 5
//use this for Vanila Javascript.
'use strict';

//2. Variable
//let (added in ES6) ES6에서 추가 됨
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (DO NOT EVER USE THIS!) ES6에서 let 변수를 사용하기 전에 많이 사용했던 변수타입
//현재는 사용하지 않는 것이 좋다
//값을 할당하기도 전에 출력이 가능하다 var hoisting이라고 한다 - 어디에 선언했는지 상관없이 제일 위로 선언을 끌어올려주는 것을 뜻함
//var hoisting (move declaration from bottom to top)
//var has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3. Constants
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber  = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container(single item을 하나로 묶어 놓은 것))
//function, first-class function(함수도 변수처럼 할당이 가능하다)

const count = 17;   //integer
const size  = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric alues: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, DO NOT use it yet) **현재는 사용하고 있을지도 모르기 때문에 따로 공부할 것
const bigInt = 1234567890123456789012345678901234567890n;    //over (-2**54 ~ 2*53) 표현가능 범위
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char     = 'c';
const brendan  = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!;`  //template literals (string) 물결표 아래에 있는 문자를 뜻한다
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''(공백)
//true: any other value
const canRead = true;
const test    = 3 < 1;  //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`);    에러발생
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  //.description을 항상 붙여야 에러가 발생하지 않는다

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};    //const ellis 값은 변경이 불가하지만 {} 안의 변수들은 값이 변경이 가능함
console.log(ellie);
console.log(ellie.name);
console.log(ellie.age);
ellie.age = 21;
console.log(ellie.age);

//5. Dynamic typing: dynamically typed language
//선언할 때 어떤 타입인지 선언하지 않고 런타임시 할당된 값이 변경될 수 있는 것을 말한다
let text = 'hello';
console.log(text.charAt(0));    //h printout
console.log(`value: ${text}, type: ${typeof text}`);    //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    //string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    //number
console.log(text.charAt(0));    //변수가 number로 변경되서 에러가 발생됨, 이로 인해 typescript가 나오게 된 배경
